import React, { useState } from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

const LoginUser = () => {

    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });

    const { login } = useLogin()



    const handleSubmit = async (e) => {
        e.preventDefault();

        await login(inputs)

    }

    return (
        <>
            <section className="Pages-Header about-bg-img">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <h1 className="text-center text-light">Login to your account</h1>
                    <p className="text-light"><NavLink to='/'>HOME</NavLink> / <NavLink>login</NavLink></p>
                </div>
            </section>
            <div className="container d-flex flex-column align-items-center p-3">
                <form onSubmit={handleSubmit} className='w-100 d-flex flex-column align-items-center'>
                    <div className="form-input-div mb-3">
                        <label htmlFor="exampleFormControlInput1" className='form-label'>Email: </label>
                        <input
                            type="email"
                            className="form-control"
                            id='exampleFormControlInput1'
                            value={inputs.email}
                            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                        />
                    </div>
                    <div className="form-input-div mb-3">
                        <label htmlFor="exampleFormControlInput2" className='form-label'>Password: </label>
                        <input
                            type="password"
                            className="form-control"
                            id='exampleFormControlInput2'
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                    </div>
                    <div className="form-input-div mb-3">
                        <button type='submit' className="btn btn-primary w-100">Login</button>
                    </div>
                    <div className="form-input-div">
                        <h6>Not have an account? <NavLink to='/signup'>Sign up</NavLink></h6>
                    </div>
                </form>
            </div>

        </>
    )
}

export default LoginUser
