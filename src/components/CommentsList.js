import React, { Component } from 'react';
import Comment from './Comment';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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

        if (accepter.find(key => key == 13) && accepter.find(key => key == 17)) {
            console.log("accepter");
            this.setState({
                newComment: this.state.newComment.concat(this.state.value),
                value: ''
            });
        }
        console.log(this.state.newComment);
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
            <div>
                <Comment newComment={this.state.newComment} />
                <form>
                    <textarea
                        type="text"
                        onKeyDown={this.handleSubmitKeybord}
                        ref="value"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </form>
            </div>
        );
    }
}



class CommentsList extends React.Component {
    constructor(props){
        super(props);
        this.eachComent = this.eachComent.bind(this);
    }

    eachComent(task) {
        if (task.id === this.props.currentComment) {
            return (
                <div key={task.id}>
                    <h2>{task.task}</h2>
                    <div className="comments-wrapper">
                        <div className="comment">
                            {task.comments}
                            <Form/>
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