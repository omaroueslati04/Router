import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { moviesData } from './component/data';
import MovieList from './component/MovieList';
import FilterByName from './component/FilterByName';
import FilterbyRate from './component/Rating';
import Addmovies from './component/Addmovies';
import { Routes,Route } from 'react-router-dom';
import Description from './pages/Description';




function App() {
  const[movies,setMovies]=useState(moviesData)
  const [inputSearch,setInputSearch]=useState('')
  const[rating,setRating]=useState(1)
  const add=(newmovie)=>{
    setMovies([...movies,newmovie])
  }
  console.log(movies);
  return (
    <div className="App">
      <Routes>
        
        <Route path="/" element={
          <>
            <FilterByName inputSearch={inputSearch} setInputSearch={setInputSearch}/>
            <FilterbyRate isMovieRating={false} rating={rating} setRating={setRating} />
            <MovieList movies={movies} inputSearch={inputSearch} rating={rating}/>
            <Addmovies add={add}/>
          </>
        }/>
        
        <Route path='/description/:id' element={<Description/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
