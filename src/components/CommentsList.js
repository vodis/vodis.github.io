import React from 'react';
import CommentAvatar from './CommentAvatar';
import './Stylesheet.css';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskId: this.props.taskId,
            keys: [],
            value: '',
            newComment: []
        };
        this.handleSubmitKeybord = this.handleSubmitKeybord.bind(this);
        this.resetKeys = this.resetKeys.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillUpdate(event) {
        var accepter = [];
        this.state.keys.map(key => {
            accepter.push(key)
        });

        if (accepter.find(key => key === 13) && accepter.find(key => key === 17)) {
            const comments = this.state.value;
            this.props.getState(this, this.state.value);
            this.setState({
                newComment: comments,
                value: ''
            });
            console.log("CommentsList_componentWillUpdate_find props of comments", this.state.newComment);
        }
    }

    componentDidMount() {
        var intervalId = setInterval(this.resetKeys, 100);
        this.setState({intervalId: intervalId});
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    resetKeys() {
        this.setState({
            keys: []
        });
    }

    handleSubmitKeybord(event) {
        var map = [event.keyCode];
        this.setState({
            keys: this.state.keys.concat(map)
        });
    }

    handleChange() {
        var value = this.refs.value.value;
        this.setState({
            value: value
        });
    }

    render() {

        return (
            <div className="new-comment-container">
                <div className="row">
                    <div className="col-1 avatar avatar-props-0">
                    </div>
                    <div className="col-11">
                        <form>
                            <textarea
                                type="text"
                                onKeyDown={this.handleSubmitKeybord}
                                ref="value"
                                value={this.state.value}
                                onChange={this.handleChange}
                                className="textarea"
                            />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}



class CommentsList extends React.Component {
    constructor(props){
        super(props);
        this.eachComent = this.eachComent.bind(this);
        this.receiveState = this.receiveState.bind(this);
    }

    receiveState(e) {
        this.props.setArrayOfComments(e.state.value, e.state.taskId);
    }

    eachComent(task) {
        if (task.id === this.props.currentComment) {
            return (
                <div key={task.id} className="content">
                    <div className="container">
                        <h2>{task.task}</h2>
                        <div className="comments-wrapper">
                            <div>
                                <div className="comment">
                                    {task.comments.map((comment, key) => {
                                        return (
                                            <div key={key} className="comment-container">
                                                <div className="row">
                                                    <CommentAvatar comment={comment} identifier={key}/>
                                                    <div className="col-11">
                                                        <p className="text">{comment}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                                <Form taskId={task.id} getState={this.receiveState}/>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }


    render() {
        if (!!this.props.onStage) {
            return (
                <div>
                    {this.props.tasks.map(this.eachComent)}
                </div>
            );
        } else {
            return (
                <div>
                </div>
            );
        }
    }
}

export default CommentsList ;