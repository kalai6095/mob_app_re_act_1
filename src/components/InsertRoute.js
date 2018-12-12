import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './Home';
import Login from './Login';

class InsertRoute extends Component {
    render() {
        return (
            <Router>
                <div>
                    <h2>Hi Welcome</h2>
                    <ul>
                        <li style={{'listStyle': 'none'}}><Link to={'/'}>Home</Link></li>
                        <li style={{'listStyle': 'none'}}><Link to={'/login'}>Login</Link></li>
                    </ul>
                    <hr/>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/login' component={Login}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default InsertRoute;