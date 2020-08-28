import React, { Component } from 'react';
import BookList from '../components/BookList/BookList';
import SearchBox from '../components/SearchBox/SearchBox';
import Scroll from '../components/Scroll/Scroll';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import Navigation from '../components/Navigation/Navigation';
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
        isLoggedIn: false,
        route:'signin',
      }
    }
   onRouteChange = (route) => {
       if(route === 'register'|| route === 'signin'){
           this.setState({isLoggedIn: false});
       } else if(route === 'home') {
           this.setState({isLoggedIn: true});
       }
        this.setState({route});
   };
   onInputChange = (e) => {
       this.setState({input: e.target.value})
    };
    displayResult = (result) => {
        this.setState({result})
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const book = this.state.input;
        fetch(`https://www.googleapis.com/books/v1/volumes?q=psychology/${book}`)
        .then(response => response.json())
        .then(result => {
            this.displayResult(result.items)
        })
        .catch(err => console.log(err))
    };
   render(){
        
    return (
        <div className='app'>
                <Particle className='particle'
                params={backgroundParticles}/>
                <Navigation isLoggedIn={this.state.isLoggedIn} onRouteChange={this.onRouteChange}/>
            {(this.state.route === 'home') ?
            (<div>
                <SearchBox  onInputChange={this.onInputChange} handleSubmit={this.handleSubmit}/>
                <Scroll>
                    <BookList result={this.state.result}/>
                </Scroll>
            </div>): (this.state.route === 'signin') ?
                (<Login onRouteChange={this.onRouteChange}/>) :
                (<Register onRouteChange={this.onRouteChange}/>)
            }
         </div>
        );
    }
}

export default App;