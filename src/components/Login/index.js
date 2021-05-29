import React, { useState } from 'react'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div className="container">
            <h2>Login form</h2>
            <form action="/action_page.php">
                <div className="form-group col-5">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email" value={email}
                        onChange={e => setEmail(e.target.value)}
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
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>

    )
}

export default Login
