import React from 'react';
import './Register.css';

const Register = ({ onRouteChange }) => {
    return (
        <div className='register-form'>
            <form>
                <h4>Sign Up</h4>
                <label>Name</label>
                <input type='text' placeholder='Enter your name'/>
                <label>Email</label>
                <input type='email' placeholder='Enter your email address'required/>
                <label>Password</label>
                <input type='text' placeholder='Enter your password' required/>
                <button 
                type='submit'
                onClick={() => onRouteChange('signin')}>Register</button>
            </form>
        </div>
    )
};

export default Register;