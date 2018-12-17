import React, { Component } from 'react';
import FormTasks from './components/FormTasks';
import Panal from './components/Panel';
import './App.css';
import TasksList from "./components/TasksList";

class App extends Component {
    render() {
        return (
            <div className="panels row h-100 w-100">
                <Panal/>
                {/*<FormTasks/>*/}
                <TasksList/>
            </div>
        );
    }
}

export default App;