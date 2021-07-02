

const MovieDetails = ({movie, comments}) => (
    
        <div className='text-center text-white'>
        <h2> {movie.Title}</h2>
        <img src={movie.Poster} alt = 'movie poster' />
        <h4> {movie.Type} from {movie.Year}</h4>
        <ul style= {{listStyleType: 'none'}}>
    {
        comments.map(c => (
            <li className='my-2' key= {c._id}>{c.comment}</li>
                    ))
                    
    }
        </ul>
        </div>
     
)
 
export default MovieDetails;