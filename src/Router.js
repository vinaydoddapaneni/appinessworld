import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Sample from './components/Sample';


function Root() {
    const [login, setLogin] = useState(false)
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/login" component={Login} />
                <Route path="/sample" component={Sample} />
                <Route path="/dashboard" component={Dashboard} />

            </Switch>
        </Router>
    )
}

export default Root