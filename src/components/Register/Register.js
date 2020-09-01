import React, { Component } from 'react';
import './Register.css';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            registerName: '',
            registerEmail: '',
            registerPass: ''
        }
    };

    onNameChange = (e) => {
        this.setState({registerName: e.target.value})
    };

    onEmailChange = (e) => {
        this.setState({registerEmail: e.target.value})
    };

    onPasswordChange = (e) => {
        this.setState({registerPass: e.target.value})
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
        const url = 'https://ps-books-finder.herokuapp.com/register';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.state.registerName,
                email: this.state.registerEmail,
                password: this.state.registerPass
            })
        })
        .then(response => response.json())
        .then(result => {
            if (result.body) {
                this.props.onRouteChange('signin')
            }
        })
    };

    render() {
        return (
        <div className='register-form'>
            <form>
                <h4>Sign Up</h4>
                <label htmlFor="name">Name</label>
                <input 
                type='text' 
                placeholder='Enter your name'
                onChange={this.onNameChange}/>
                <label htmlFor="email">Email</label>
                <input 
                type='email' 
                placeholder='Enter your email address'
                required
                onChange={this.onEmailChange}/>
                <label htmlFor="password">Password</label>
                <input 
                type='password' 
                placeholder='Enter your password' 
                required
                onChange={this.onPasswordChange}/>
                <button 
                type='submit'
                onClick={this.handleFormSubmit}>Register</button>
            </form>
        </div>
     )
    }
};

export default Register;