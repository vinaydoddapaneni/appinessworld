import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';

function Login() {
    const userData = {
        username: "hruday@gmail.com",
        password: "hruday123"
    }
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const history = useHistory();

    const submit = (e) => {
        e.preventDefault();
        alert('working')
        if (user === userData.username) {
            if (password === userData.password) {
                return (history.push("/dashboard"))
            }
            return setError("Invalid Password")
        }
        return setError("Invalid Username")
    }

    return (
        <div className="container">
            <h2>Login form</h2>
            <p>
                {
                    // useEffect(() => {
                    //     const timer = setTimeout(() => {
                    //         return error
                    //     }, 1000);
                    //     return () => clearTimeout(timer);
                    // }, [])
                    error
                }
            </p>
            <form  >
                <div className="form-group col-5">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email" value={user}
                        onChange={e => setUser(e.target.value)}
                        className="form-control" id="email"
                        placeholder="Enter email" name="email"
                    />
                </div>
                <div className="form-group col-5">
                    <label htmlFor="pwd">Password:</label>
                    <input
                        type="password" value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="form-control" id="pwd"
                        placeholder="Enter password" name="pswd"
                    />
                </div>
                <div className="form-group form-check">
                    <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" name="remember" /> Remember me
                    </label>
                </div>
                <button
                    type="submit"
                    onClick={submit}
                    className="btn btn-primary"
                    disabled={!user | !password}
                >Submit</button>
            </form>
        </div>

    )
}

export default Login
