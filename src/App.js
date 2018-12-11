import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from './components/TextField'
import TableRepeat from "./components/TableRepeat";
import InsertRoute from "./components/InsertRoute";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
                <TextField label="this is text to display label" content="this is content of text field"
                           remote="app.js"/>
                <TextField/>
                <TableRepeat/>
                <InsertRoute/>
            </div>
        );
    }
}

export default App;
