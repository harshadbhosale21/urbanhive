import React, { useState } from 'react'
import useSignup from '../../hooks/useSignup.js';
import { NavLink } from 'react-router-dom';
import './style.css'

const Signup = () => {

    const [inputs, setInputs] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
    });

    const { signup } = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await signup(inputs);
        console.log(inputs)
        console.log("data", data)
    }


    return (
        <>
            <section className="Pages-Header about-bg-img">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <h1 className="text-center text-light">New Registration</h1>
                    <p className="text-light"><NavLink to='/'>HOME</NavLink> / <NavLink>Sign up</NavLink></p>
                </div>
            </section>
            <div className="container d-flex flex-column align-items-center p-3">
                <form className='w-100  d-flex flex-column align-items-center' onSubmit={handleSubmit}>
                    <div class="mb-3 form-input-div">
                        <label htmlFor="exampleFormControlInput1" class="form-label">Full Name:</label>
                        <input
                            type="text"
                            class="form-control"
                            id="exampleFormControlInput1"
                            placeholder="john"
                            value={inputs.fullName}
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                        />
                    </div>
                    <div class="mb-3 form-input-div">
                        <label htmlFor="exampleFormControlInput2" class="form-label">Email address:</label>
                        <input
                            type="email"
                            class="form-control"
                            id="exampleFormControlInput2"
                            placeholder="name@example.com"
                            value={inputs.email}
                            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                        />
                    </div>
                    <div class="mb-3 form-input-div">
                        <label htmlFor="exampleFormControlInput5" class="form-label">Phone:</label>
                        <input
                            type="text"
                            class="form-control"
                            id="exampleFormControlInput5"
                            placeholder="10 digit phone No."
                            value={inputs.phoneNumber}
                            onChange={(e) => setInputs({ ...inputs, phoneNumber: e.target.value })}
                        />
                    </div>
                    <div class="mb-3 form-input-div">
                        <label htmlFor="exampleFormControlInput3" class="form-label">Password:</label>
                        <input
                            type="password"
                            class="form-control"
                            id="exampleFormControlInput3"
                            placeholder="must be below 6 characters"
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                    </div>
                    <div class="mb-3 form-input-div">
                        <label htmlFor="exampleFormControlInput4" class="form-label">Confirm Password:</label>
                        <input
                            type="password"
                            class="form-control"
                            id="exampleFormControlInput4"
                            placeholder="must be below 6 characters"
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                        />
                    </div>
                    <div className="mb-3 form-input-div">
                        <button type='submit' className='btn btn-primary w-100'>Sign up</button>
                    </div>
                    <div className='form-input-div'>
                        <h6>Already have an account? <NavLink to='/login'>Login</NavLink></h6>
                    </div>
                </form>
            </div>

        </>
    )
}

export default Signup
