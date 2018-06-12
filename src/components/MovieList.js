import React from 'react'

const MovieList = (props) =>{

    const options = props.movies.map((movie,index)=>{
        return <option key={index} value={index} >{movie.name}</option>
    })

    function handleChoice(event){
        // console.log(event.target.value)
        props.onMovieSelect(event.target.value)
    }

    return(
        <select defaultValue="default" onChange={handleChoice}>
            <option disabled value="default">Choose a movie</option>
            {options}
        </select>
    )
}

export default MovieList