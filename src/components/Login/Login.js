import React from 'react';
import './Login.css';

const Login  = ({ onRouteChange }) => {
    return (
        <div className="login-form">
            <form>
                <h4>Sign In</h4>
                <label>Email</label>
                <input type="email" placeholder="Enter your email" required />
                <label>Password</label>
                <input type="password" placeholder="Enter your password" required />
                <button 
                type="submit"
                onClick={() => onRouteChange('home')}>Login</button>
                <p>Don't have account?<span onClick={() => onRouteChange('register')}>Sign up</span></p>
            </form>
        </div>
    )
}

export default Login;