import React, { Component } from 'react';
import TasksForm from "./TasksForm";
import TasksList from "./TasksList";

class Tasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            tasks: [{
                task: "initial task",
                id: 1,
                comments: ["initial comment"]
            }]
        };
        this.addItem = this.addItem.bind(this);
    }

    getInitialState() {

    }

    addItem() {

    }

    render() {
        return (
            <div>
                <TasksForm/>
                <TasksList/>
            </div>
        );
    }
}

export default Tasks;