import React, { Component } from 'react';
import BookList from '../components/BookList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Particle from 'react-particles-js';

const backgroundParticles = {
    particle:{
        line_linked:{
            shadow:{
                enable: true,
                color:'#3CA9D1',
                blur: 5
            }
        },
        number:{
            value:70,
            density: {
              enable: true,
              value_area: 800
            }
        }
    }
}


class App extends Component{
    constructor() {
        super();
      this.state={
        book: '',
        input: '',
        result: [],
      }
    }
   onInputChange = (e) => {
       this.setState({input: e.target.value})
    }
    displayResult = (result) => {
        this.setState({result})
        console.log('state change',this.state.result)
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const book = this.state.input;
        fetch(`https://www.googleapis.com/books/v1/volumes?q=psychology/${book}`)
        .then(response => response.json())
        .then(result => {
            this.displayResult(result.items)
        })
        .catch(err => console.log(err))
        console.log(book)
    }
   render(){
        return (
            <div>
                <Particle className='particle'
                params={backgroundParticles}/>
                <SearchBox  onInputChange={this.onInputChange} handleSubmit={this.handleSubmit}/>
                <Scroll>
                    <BookList result={this.state.result}/>
                </Scroll>
            </div>
            );
    }
}

export default App;