import React from 'react';

class FormTasks extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        let value = this.refs.input.value;

        this.props.getValue(value);

        this.refs.input.value = '';
    }

    render() {
        return (
            <div>
                <h2>Items</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Type name here..."
                        ref="input"
                    />
                    <button type="summit">Add new</button>
                </form>
            </div>
        );
    }

}

export default FormTasks;