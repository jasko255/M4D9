import MovieDetails from './MovieDetails'
import { useState, useEffect } from "react"

// http://www.omdbapi.com/?apikey=88e0a7be&i=tt0241527


const ShowDetail = ({match}) => {
    const [info, setInfo] = useState(null)
    const [comments, setComments] = useState([])

    useEffect(()=>{

        const getMovieId = async () =>{

            let id = match.params.movId
            if(id){
            let response = await fetch('http://www.omdbapi.com/?apikey=88e0a7be&i=' + id)
            let moviesId = await response.json()
            setInfo(moviesId)    
            }    
        }
        getMovieId()
    },[match.params.movId])


    useEffect(()=>{

        const getMovieComments = async () =>{

            let id = match.params.movId
            if(id){
            let response = await fetch(' https://striveschool-api.herokuapp.com/api/comments/' + id, {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlNWM1ZGNlYWY0ODAwMTVjOTE5NDEiLCJpYXQiOjE2MjUyMjkwODgsImV4cCI6MTYyNjQzODY4OH0.1gQDudWguqOyo5hAjlJFxHpOHzUUNrPfKHFccmPK5og' 
                }
            })
            let moviesComments = await response.json()
            setComments(moviesComments)    
            console.log('comments', moviesComments);
            }    
        }
        getMovieComments()
    },[match.params.movId])

//     const [selectedMovie, setSelectedMovie] = useState(null)

//     useEffect(() => {
//         console.log('the id to look for is', match.params.movId)
//         let id = match.params.movId
//         let movToShow = this.state.movies.find(mov => mov.id.toString() === id)
//         console.log(movToShow)
//         setSelectedMovie(movToShow)
//     }, [match.params.movId])

    return (
        <div>

            {
                info && <MovieDetails movie={info} comments = {comments}/>
            }
        </div>
    )

    

    
}

export default ShowDetail