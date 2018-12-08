import React, { Component } from 'react';

class TasksList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listItems: this.props.items
        };
        // this.deleteItem = this.deleteItem.bind(this, index);
    }

    handleListItems(props) {
        const items = props;

        if (!!items) {
            const listItems = items.map((item, index) =>
                <div>
                    <div key={index}>
                        <p>{item}</p>
                        <span>0</span>
                        <button type="button" onClick={this.deleteItem.bind(this, index)}>Delete</button>
                    </div>
                </div>
            );
            return listItems;
        }
    }

    deleteItem(index) {debugger;
        const listItems = Object.assign([], index);
        listItems.splice(index, 1);
        this.setState({
            listItems: listItems
        })
    };

    render() {
        const items = this.props.items;

        return (
            <div>
                {this.handleListItems(items)}
            </div>
        );
    }
}

export default TasksList;