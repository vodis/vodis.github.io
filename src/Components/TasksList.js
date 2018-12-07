import React, { Component } from 'react';

class TasksList extends React.Component {
    handleChangeItems(items) {
        for (let i = 0; i<items.length; i++) {
            return (
                <div>
                    <p key={i}>{items[i]}</p>
                </div>
            );
        }
    }

    render() {
        const items = this.props.items;
        return (
            <div>
                <p>{items}</p>
            </div>
        );
    }
}

export default TasksList;