import React, { Component } from 'react';
import BookList from '../components/BookList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';



class App extends Component{
    constructor() {
        super();
      this.state={
        books: [],
        searchfield: ''
      }
    }
    componentDidMount(){
        const url ='https://www.googleapis.com/books/v1/volumes?q=psychology/'
        fetch(url)
            .then(response =>response.json())
            .then(book => this.state.books) 
            console.log('componedDidMount') 
    }
    componentDidUpdate(){
        if (this.state.searchfield === ''){
            return;
        }else{
            console.log('cool')
            const url =`https://www.googleapis.com/books/v1/volumes?q=psychology/${this.state.searchfield}`
            console.log(this.state.searchfield)
            fetch(url)
                .then(response =>response.json())
                .then(book => this.setState({books: book.items}))
        }
    }
    
    componentWillUnmount(){
        this.setState = (state, callback) => {
            return;
        }
    }
    onsearchChange = (e) => {
       this.setState({searchfield: e.target.value})
    }

   render(){
       
           console.log('filtered')
            const filtteredBook = this.state.books.filter(book =>{
                if(this.state.books === undefined){
                    console.log('no book found')
                }
                return book.volumeInfo.title.toLowerCase().includes(this.state.searchfield.toLowerCase())
            }) 
        return (
            <div>
                <h1 className='title'>Psychology Books</h1>
                <SearchBox searchChange={this.onsearchChange}/>
                <Scroll>
                    <BookList books={filtteredBook}/>
                </Scroll>
            </div>
            );
    }
}

export default App;