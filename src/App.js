import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormTasks from './components/FormTasks';

class App extends Component {
    render() {
        return (
            <div className="row h-100 w-100">
                <div className="col-2">
                    <header>
                        <div className="wrapper">
                            <div className="content">
                                <h1 className="title">dairy app</h1>
                                <p className="subtitle"> Comment with no sense </p>
                            </div>
                        </div>
                    </header>
                </div>
                <FormTasks/>
            </div>
        );
    }
}

export default App;