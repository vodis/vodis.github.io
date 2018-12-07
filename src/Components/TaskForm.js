import React, { Component } from 'react';
import TasksList from "./TasksList";

class TaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            items: []
        };
        this.updateValue = this.updateValue.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    updateValue(event) {
        this.setState({
            value: event.target.value
        });
    }

    addItem(event) {
        event.preventDefault();
        let item = this.refs.item.value;
        this.setState({
            items: this.state.items.concat(item)
        });
        this.state.value = '';
    }

    render() {
        const items = this.state.items;

        return (
            <div>
                <h1>Items</h1>
                <form onSubmit={this.addItem}>
                    <input
                        type="text"
                        placeholder="Type name here..."
                        value={this.state.value}
                        onChange={this.updateValue}
                        ref="item"
                    />
                    <button type="summit">Add</button>
                </form>
                <TasksList items={this.state.items}/>
            </div>
        );
    }
}

export default TaskForm;