import React from 'react'

const MovieDetail = (props) =>{
    if(!props.movie){
        return null
    }

    return(
        <div>
        <h3>Movie Details of {props.movie.name}</h3>
        <img src={props.movie.artworkUrl100} alt={props.movie.name}/>
        <h4>Director: {props.movie.artistName} </h4>
        <h4>Release Data: {props.movie.releaseDate} </h4>
        <h4><a href={props.movie.url}>Link</a> </h4>
        </div>
    )
}

export default MovieDetail