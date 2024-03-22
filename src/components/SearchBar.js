import axios from "axios";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";

const SearchBar=({onSearch})=>{
    const dispatch = useDispatch();
    const [searchTerm,setSearchTerm]=useState('');
    const [yearFilter, setYearFilter] = useState('');
    const [typeFilter, setTypeFilter] = useState('All');
    const movies = useSelector(state=>state.movies);

    useEffect(() => {
        const getMovies = async() => {
            dispatch({ type: 'SEND_REQUEST' });

            const API_KEY = "8ec8f45d";

            try {

                const response = (await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`));
                if (response.data.Response === "True") {
                    dispatch({ type: 'GET_MOVIES', payload: response.data.Search });
                } else {
                    dispatch({ type: 'SET_ERROR', payload: response.data.Error });
                }
            } catch (error) {
                dispatch({ type: 'SET_ERROR', payload: error });
            }
        }
        if(searchTerm.length > 2){
            getMovies();
            //setSearchTerm('')
        } else{
            dispatch({ type: 'CLEAR_MOVIES' });
            setYearFilter('')
            setTypeFilter('All')
        }
    }, [searchTerm])

    useEffect(() => {
        dispatch({type : 'FILTER_MOVIES', yearFilter, typeFilter})
    }, [yearFilter, typeFilter])

    const handleChange=(event)=>{
        setSearchTerm(event.target.value);
    }

    const handleYearFilter=(event)=>{
        setYearFilter(event.target.value);
    }

    const handleTypeFilter=(event)=>{
        setTypeFilter(event.target.value);
    }


    return(
        <div>
            <input type="text" placeholder="Search Movies....." value={searchTerm}  onChange={handleChange}/>
            <br></br>
            {searchTerm.length < 3 && <label style={{fontSize: 12, color:"red"}}>*Type at least 3 characters to search for movies</label>}
            {movies != null && movies.length > 0 &&
            <div style = {{marginTop: 30}}>
                <h3 style={{color: "#348269"}}>Filters: </h3>
                <label style={{fontSize: 20, marginRight: 10, color: "#348269"}}>Year: </label>
                <input type="text" placeholder="Year" value={yearFilter}  onChange={handleYearFilter}/>
                <br></br>
                <label style={{fontSize: 20, marginRight: 6, color: "#348269"}}>Type: </label>
                <select name="types" id="types" onChange={handleTypeFilter}>
                    <option value="all">All</option>
                    <option value="movie">Movie</option>
                    <option value="series">Series</option>
                </select>
                <br></br>
            </div>
        }
    </div>
    )
}

export default SearchBar;