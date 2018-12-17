import React from 'react';
import './Stylesheet.css';

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
            <div key={task.id} onClick={this.openListComments.bind(this, task.id)} className="item">
                <p className="item-name">{task.task}</p>
                <span className="point">{task.comments.length}</span>
                <button ref={task.id} onClick={this.onDeleteTask.bind(this, task.id)} className="delete-btn">Delete</button>
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