import React from 'react';
import Tasks from './Tasks';
import CommentsList from './CommentsList';
import FormTasks from "./FormTasks";
import './Stylesheet.css';

class TasksList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            index: this.props.index,
            tasks: [],
            comments: [],
            currentIdComment: 0,
            stage: false
        };
        this.setListTasks = this.setListTasks.bind(this);
        this.handleDeleteTask = this.handleDeleteTask.bind(this);
        this.handleSetComments = this.handleSetComments.bind(this);
        this.findCurrentComment = this.findCurrentComment.bind(this);
        this.setValueByNewFormTasks = this.setValueByNewFormTasks.bind(this);
    }

    componentWillMount() {
        console.log("TasksList_componentDidMount_place for look in localstore and fetch date");

        localStorage.getItem('tasks') && this.setState({
            tasks: JSON.parse(localStorage.getItem('tasks')),
            isLoading: false
        });
    }

    componentDidMount() {
        if (!localStorage.getItem('tasks')) {
            this.fetchData();
        } else {
            console.log("Using data from localStorage.")
        }

        this.setState({
            comments: CommentsList
        });
    }

    fetchData() {

    }

    componentWillUpdate(nextProps, nextState) {
        console.log("TasksList_componentWillUpdate: Place for update and save data to localstore", nextProps, this.state.tasks);
        localStorage.setItem('tasks', JSON.stringify(nextState.tasks));
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

    handleSetComments(comment, id) {
        var newComment = [comment];
        var id = id;

        var newTasksObject = this.state.tasks;
        newTasksObject.map(task => {
            if (task.id === id) {
                task.comments.push(newComment);
            }
        });

        this.setState({
            tasks: {},
            tasks: newTasksObject
        });
    }

    findCurrentComment(i) {
        this.setState({
            stage: true,
            currentIdComment: i
        });
    }

    setValueByNewFormTasks(value) {
        this.setListTasks(value);
    }

    setListTasks(value) {
        let task = value;
        var arrId = [];

        this.state.tasks.map(task => {
            if (task.id == undefined || task.id == null) {
                arrId.push(0)
            } else {
                arrId.push(task.id);
            }
        });

        var id = arrId.length === 0 ? 0 : Math.max(...arrId) + 1;

        let comments = [];
        this.setState({
            index: id,
            tasks: this.state.tasks.concat({task, id, comments})
        });
    }

    render() {
        const tasks = this.state.tasks;

        return (
            <div className="row col-10 page-content">
                <div className="col-6">
                    <div className="content">
                        <FormTasks getValue={this.setValueByNewFormTasks}/>
                        <Tasks
                            tasks={tasks}
                            deleteTask={this.handleDeleteTask}
                            listComments={this.findCurrentComment}
                        />
                    </div>
                </div>
                <div className="col-6">
                        <CommentsList
                            tasks={tasks}
                            currentComment={this.state.currentIdComment}
                            onStage={this.state.stage}
                            setArrayOfComments={this.handleSetComments}
                        />
                </div>
            </div>
        );
    }
}

export default TasksList;