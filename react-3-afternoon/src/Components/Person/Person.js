import React from 'react';




const Person = (props) => {
    console.log("Props", props)
    const { person } = props;
    const {id, name, city, country, title, employer, favoriteMovies} = person;
    return (
         <div key={person.id}>
        
            <h1>{person.name.first} {person.name.last}</h1>
             <h3>From:{person.city}, {person.country}</h3>
             <h3>Title:{person.title}</h3>
             <h3>employer: {person.employer}</h3>
             <ol>
             {person.favoriteMovies.map(movie => {
                 console.log("movie", movie)
                 return<li>{movie}</li>
             })}
             </ol> 
            
         </div>
         )
}




export default Person;