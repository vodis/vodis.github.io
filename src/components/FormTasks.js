import React, { Component } from 'react';
import TasksList from "./TasksList";

class FormTasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            index: 0
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        let value = this.refs.input.value;
        let index = this.state.index + 1;
        this.setState({
            value: value,
            index: index
        });
        this.refs.input.value = '';
    }

    render() {
        return (
            <div className="col-10 page-content">
                <h2>Items</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Type name here..."
                        ref="input"
                    />
                    <button type="summit">Add new</button>
                </form>
                <TasksList value={this.state.value} index={this.state.index} />
            </div>
        );
    }
}

export default FormTasks;