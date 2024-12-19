import React from 'react'
import { Rate } from 'antd';

const desc=["bad","passable","moyen","good","verygood"];
const Rating = ({MovieRating,rating,setRating,isMovieRating}) => {
  const handleChange=(value)=>{
    setRating(value);
  };
    return (
    <div>
         {isMovieRating ?
         <span className='movierating'> 
            <Rate disabled value={MovieRating}/>
         </span>
         :
         <span>
            <Rate tooltips={desc} onChange={handleChange} value={rating}/>
         </span>}
    </div>
  )
};

export default Rating
