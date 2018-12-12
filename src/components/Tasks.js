import React, { Component } from 'react';

class Tasks extends React.Component {
    constructor(props){
        super(props);
        this.eachTasks = this.eachTasks.bind(this);
    }

    onDeleteTask(i) {
        this.props.deleteTask(i);
    }

    openListComments(i) {
        this.props.listComments(i);
    }

    eachTasks(task) {
        return (
            <div className="item" key={task.id} onClick={this.openListComments.bind(this, task.id)} >
                {task.task}
                <button ref={task.id} onClick={this.onDeleteTask.bind(this, task.id)}>Delete</button>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.props.tasks.map(this.eachTasks)}
            </div>
        );
    }
}

export default Tasks ;
