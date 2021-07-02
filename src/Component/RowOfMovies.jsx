import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import SingleMovie from "./SingleMovie";
import "../styles.css";
import { BACKEND_URL } from "../constants";

class RowOfMovies extends React.Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    this.fetchMovies();
  }
  fetchMovies = async () => {
    const apiUrl = BACKEND_URL
    let response = await fetch(`${apiUrl}/movies`);
    let movies = await response.json();
    console.log(movies);
    const filteredMovies = movies.filter(mov => {
      return mov.Title.includes(`${this.props.title}`)
    })
    this.setState({ movies: filteredMovies }, () =>
      console.log('whatta no',this.state.movies)
    );
  };

 

  render() {




//     {img: "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg",
//      title: "Rogue One: A Star Wars Story", id: "tt3748528"}
// id: "tt3748528"
// img: "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg"
// title: "Rogue One: A Star Wars Story"


    return (
        <>
       <h2>{this.props.title}</h2>
      <Carousel className="car-c" indicators={false}>
        <Carousel.Item>
          {this.state.movies &&
            this.state.movies.slice(0, 6).map((movie) => (
              <SingleMovie img={movie.Poster} title={movie.Title} id={movie.imdbID} />
            ))}
        </Carousel.Item>
        <Carousel.Item>
          {this.state.movies &&
            this.state.movies.slice(4, 10).map((movie) => {
                console.log(movie.Title || "title not found" , movie.imdbID || "id not found")
               return  <SingleMovie img={movie.Poster} title={movie.Title} id={movie.imdbID}/>
            }
            )}
        </Carousel.Item>
        
      </Carousel>
      </>
    );
  }
}
export default RowOfMovies;
