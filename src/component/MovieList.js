import React from 'react';
import CARD from "./CARD";

const MovieList = ({movies,inputSearch,rating}) => {
  return (
    
<div style={{display:'flex', marginTop:"50px", justifyContent:"space-between"}}>      
    {movies
    .filter(movie=>movie.title.toUpperCase().includes(inputSearch.toUpperCase()) 
    &&
     movie.rate>=rating)
    .map(movie=><CARD movie={movie} key={movie.id}/>)}
</div>
    
  )
}

export default MovieList
