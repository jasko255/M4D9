
import './App.css';
import CustomNavbar from './Component/Navbar';
import Header from './Component/Header';
import RowOfMovies from './Component/RowOfMovies';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ShowDetail from './Component/ShowDetail'


// Create a Route for a ShowDetail component. It should be able to receive a ID parameter from the querystring.
// Create the ShowDetail component that receives from the url the ID parameter and fetches all the informations about the movie (from omdb & comments too).
// Make every Show (Movie or Series) clickable and create an onClick redirect to the ShowDetail route.
// From the main component pass also a prop called 'title' to every other component wrapped inside a Route, and use it for displaying inside of it the title of that section (in an "h1").


function App() {
  return (
    <>
    <Router>
    <CustomNavbar/>
    <Header/>
    <Route exact path="/" render={(routerProps) => <RowOfMovies {...routerProps} title="Star Wars" />} />
    <Route exact path="/" render={(routerProps) => <RowOfMovies {...routerProps} title='Harry Potter' />} />
    <Route exact path="/" render={(routerProps) => <RowOfMovies {...routerProps} title='The lord of the rings' />} />
    
    <Route path="/details/:movId/" component={ShowDetail} />
    {/* <RowOfMovies title='Harry Potter'/> */}
    {/* <RowOfMovies title='The lord of the rings'/> */}
    </Router>
    </>
  );
}

export default App;
