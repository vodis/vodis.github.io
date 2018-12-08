import React, { Component } from 'react';
import Tasks from "./Tasks";

class TasksForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values: []
        };
        this.updateValue = this.updateValue.bind(this);
        this.submitValue = this.submitValue.bind(this);
        this.echoTask = this.echoTask.bind(this);
    }

    updateValue(e) {
        this.setState({
            values: e.target.value
        });
    }

    submitValue(e) {
        e.preventDefault();
        var item = this.refs.item.value;
        this.setState({
            values: this.state.values.concat(item)
        });
        this.refs.item.value = "";
        this.echoTask(item);
    }

    echoTask(item) {
        return (
            <Tasks value={item}/>

        );
    }

    render() {
        return (
            <div>
                <h2>Items</h2>
                <form onSubmit={this.submitValue}>
                    <input
                        type="text"
                        placeholder="Type name here..."
                        value={this.state.value}
                        onChange={this.updateValue}
                        ref="item"
                    />
                    <button type="summit">Add</button>
                </form>
            </div>
        );
    }
}

export default TasksForm;