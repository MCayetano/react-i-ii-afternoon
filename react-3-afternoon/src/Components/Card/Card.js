import React, { Component } from 'react';
import people from '../Data/data';
import Person from '../Person/Person';


class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            personIndex: 0
        }
        
        
        //DONT NEED IF USING ARROW FUNCTION
        // this.previousIndex = this.previousIndex.bind(this);
    }


previousIndex = () => {
    if(this.state.personIndex === 0) {
        let newPersonIndex = people.length -1;
        this.setState({
            personIndex: newPersonIndex
        });
    } else {
        this.setState({
            personIndex: this.state.personIndex - 1
        });
    }

}

nextIndex = () => {
    if(this.state.personIndex === people.length - 1) {
        this.setState({
            personIndex: 0
        })
    } else {
        this.setState({
            personIndex: this.state.personIndex + 1
        })
    }
}





    render = () => {
       
        const { personIndex } = this.state;
         // console.log("DATA", people);
        const mappedData = people.map(person => {
            // console.log("person", person);
            return <Person person={person}/>
            
            
        })
        // console.log(mappedData)
        return(
            <div>
                <h1>{personIndex + 1}/{people.length}</h1>
                {mappedData[personIndex]}
                <button onClick={this.previousIndex}>Previous</button>
                <button onClick={this.nextIndex}>Next</button>
                
            </div>
        );
    }
}


export default Card;