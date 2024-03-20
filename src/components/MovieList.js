import { useSelector } from "react-redux";
import MovieItem from "./MovieItem";

export const MovieList = () => {
    const movies = useSelector(state=>state.movies);
    const filteredMovies = useSelector(state=>state.filteredMovies);
    return(
        <div style={{marginTop: 20}}>
            <h2>{movies != null && movies.length > 0 ? "Movies" : ""}</h2>
            <div className="row row-cols-3">
                {filteredMovies == null && movies != null && movies.length > 1 && movies.map((movie) => (
                        <MovieItem className="col" key={movie.imdbID} movie={movie} />
                    )
                )}
                 {filteredMovies != null && filteredMovies.map((movie) => (
                        <MovieItem className="col" key={movie.imdbID} movie={movie} />
                    )
                )}
            </div>
        </div>
    )
}