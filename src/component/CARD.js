import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import MovieRating from './Rating'
import { useNavigate } from 'react-router-dom'


const CARD = ({movie}) => {
  const navigate = useNavigate();
  const handleDescription = () => {
    navigate(`/description/${movie.id}`);
  };
  return (
    <div>
      <Card style={{ width: '18rem',  border:"1px solid ", borderRadius:'5px', maxHeight:"400px" }}>
      <Card.Img variant="top" src={movie.posterUrl} style={{maxWidth:'150px'}}/>
      <Card.Body>
      <Card.Text>{movie.id}</Card.Text>
        <Card.Title>{movie.title}</Card.Title>
        <MovieRating MovieRating={movie.rate} isMovieRating={true}/>
        <Button onClick={handleDescription}>description</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default CARD
