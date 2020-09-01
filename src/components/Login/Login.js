import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state ={
            loginEmail: '',
            loginPass: '',
        };
    }

    onEmailChange = (e) => {
        this.setState({loginEmail: e.target.value});
    };

    onPasswordChange = (e) => {
        this.setState({loginPass: e.target.value})
    };

    submitForm = (e) => {
        e.preventDefault();
        const url = 'https://ps-books-finder.herokuapp.com/login';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-Type':'application/json',
            },
            body: JSON.stringify({
                email: this.state.loginEmail,
                password: this.state.loginPass
            })
        })
        .then(response => response.json())
        .then(result => {
            if(result.token) {
                this.props.onRouteChange('home');
            }
        })
    };

   render() {
        return (
        <div className="login-form">
            <form>
                <h4>Sign In</h4>
                <label htmlFor="email">Email</label>
                <input 
                type="email" 
                placeholder="Enter your email" 
                required 
                onChange={this.onEmailChange}/>
                <label htmlFor="password">Password</label>
                <input 
                type="password" 
                placeholder="Enter your password" 
                required 
                onChange={this.onPasswordChange}/>
                <button 
                type="submit"
                onClick={this.submitForm }>Login</button>
                <p>Don't have account?
                <span 
                onClick={() => this.props.onRouteChange('register')}
                >Sign up</span>
                </p>
            </form>
        </div>
    )
}
}

export default Login;