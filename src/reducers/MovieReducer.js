const initialState={
    movies:[],
    filteredMovies: null,
    loading: false,
    error: ''
};

const MovieReducer=(state=initialState,action)=>{
    switch (action.type) {
        case "GET_MOVIES":
        return {
            ...state,
            movies:action.payload,
            filteredMovies: null,
            loading: false,
            error: ''
        }
        case "FILTER_MOVIES":
            let filteredMoviesList = [...state.movies]
            if(action.yearFilter != null){
                filteredMoviesList = state.movies.filter((movie) => movie.Year.includes(action.yearFilter))
            }
            if(action.typeFilter.toLowerCase() !== 'all'){
                filteredMoviesList = filteredMoviesList.filter((movie) => movie.Type.toLowerCase() === action.typeFilter.toLowerCase())
            }
            if(action.typeFilter.toLowerCase() === 'all'){
                filteredMoviesList = filteredMoviesList.filter((movie) => movie.Type.toLowerCase() !== action.typeFilter.toLowerCase())
            }
        return {
            ...state,
            filteredMovies: filteredMoviesList
        }
        case "SEND_REQUEST":
        return {
            ...state,
            movies: [],
            loading: true,
            error: ''
        }

        case "SET_ERROR":
        return {
            ...state,
            movies: [],
            loading: false,
            error: action.payload
        }

        case "CLEAR_MOVIES":
        return {
            ...state,
            movies: [],
            filteredMovies: null,
            error: ''
        }
    
        default:
            return state;
    }
}

export default MovieReducer;