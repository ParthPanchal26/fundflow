import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';

function Signup() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        setUserType(params.get('role'));
    }, [location.search]);

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate('/')


    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2><center>Sign Up</center></h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="firstname">
                            <strong>First Name</strong>
                        </label>
                        <input
                            type="text"
                            placeholder='Enter First Name'
                            autoComplete='off'
                            name='firstname'
                            className='form-control rounded-0'
                            onChange={(e) => setFirstname(e.target.value)}
                            value={firstname}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastname">
                            <strong>Last Name</strong>
                        </label>
                        <input
                            type="text"
                            placeholder='Enter Last Name'
                            autoComplete='off'
                            name='lastname'
                            className='form-control rounded-0'
                            onChange={(e) => setLastname(e.target.value)}
                            value={lastname}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="username">
                            <strong>Username</strong>
                        </label>
                        <input
                            type="text"
                            placeholder='Enter Username'
                            autoComplete='off'
                            name='username'
                            className='form-control rounded-0'
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder='Enter Email'
                            autoComplete='off'
                            name='email'
                            className='form-control rounded-0'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder='Enter Password'
                            name='password'
                            className='form-control rounded-0'
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Sign Up
                    </button>
                </form>
                <p className="mt-3">Already have an account?</p>
                <Link to={{
    pathname: "/login",
    state: { userType }
  }}
  className="btn btn-default border w-100  rounded-0 text-decoration-none"
>
  Login
</Link>

            </div>
        </div>
    );
}

export default Signup;
