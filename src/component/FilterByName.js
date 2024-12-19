import React from 'react'
import Form from 'react-bootstrap/Form';


const FilterByName = ({inputSearch,setInputSearch}) => {
  return (
    <div>
      <Form.Control size="lg" type="text" placeholder="enter a movie name" 
      onChange={(e)=>setInputSearch(e.target.value)}
      value={inputSearch}/>
      
      
      

    </div>
  )
}

export default FilterByName
