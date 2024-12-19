import React from 'react'
import { useParams } from 'react-router-dom'
import { moviesData } from '../component/data'

const Description = () => {
  const { id } = useParams();
  const movie = moviesData.find(movie => movie.id === parseInt(id));

  if (!movie) {
    return <div>Film non trouvé</div>
  }

  return (
    <div className="container mt-4">
      <h2>{movie.title}</h2>
      <div className="row">
        <div className="col-md-4">
          <img src={movie.posterUrl} alt={movie.title} className="img-fluid"/>
        </div>
        <div className="col-md-8">
          <p><strong>Description :</strong> {movie.description}</p>
          <p><strong>Rating :</strong> {movie.rate}/5</p>
        </div>
      </div>
    </div>
  )
}

export default Description