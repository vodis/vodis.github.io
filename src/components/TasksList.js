import React, { Component } from 'react';
import Tasks from './Tasks';
import CommentsList from './CommentsList';

class TasksList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            index: this.props.index,
            tasks: [],
            currentIdComment: 0,
            stage: false
        };
        this.setListTasks = this.setListTasks.bind(this);
        this.handleDeleteTask = this.handleDeleteTask.bind(this);
        this.findCurrentComment = this.findCurrentComment.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (this.props.index !== prevProps.index) {
            this.setState({
                value: this.props.value
            });
            this.setListTasks(this.props.value, this.state.index);
        }
    }

    setListTasks(value, index) {
        let task = value;
        let id = index + 1;
        let comments = [];
        this.setState({
            index: id,
            tasks: this.state.tasks.concat({task, id, comments})
        });
    }

    handleDeleteTask(i) {
        var arrListTasks = this.state.tasks;
        var i = i;
        var id;
        var index = arrListTasks.map( (task, index) => {
            if (task.id === i) {
                id = index;
            }
        });
        arrListTasks.splice(id, 1);
        this.setState({
            tasks: arrListTasks
        });
    }

    findCurrentComment(i) {
        this.setState({
            stage: true,
            currentIdComment: i
        });
    }

    render() {
        const tasks = this.state.tasks;
        console.log("TasksList", tasks);

        return (
            <div>
                <Tasks
                    tasks={tasks}
                    deleteTask={this.handleDeleteTask}
                    listComments={this.findCurrentComment}
                />
                <CommentsList
                    tasks={tasks}
                    currentComment={this.state.currentIdComment}
                    onStage={this.state.stage}
                />
            </div>
        );
    }
}

export default TasksList;