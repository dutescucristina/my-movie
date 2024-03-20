import { Card } from "react-bootstrap";


const MovieItem=({movie})=>{
    return(
        <div>
        <Card style={{padding: 30, marginBottom: 30, backgroundColor: "#edece8"}}>
            <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>{movie.Year}</Card.Text>
                <Card.Text>{movie.Type}</Card.Text>
                {movie.Poster != 'N/A' && <Card.Img variant="top" src={movie.Poster} />}
            </Card.Body>
        </Card>
        </div>
    )
}

export default MovieItem;