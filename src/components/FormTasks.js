import React from 'react';
import './Stylesheet.css';

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
                <div className="form-group">
                    <h2>Items</h2>
                    <form onSubmit={this.handleSubmit} className="form ng-valid ng-dirty ng-touched">
                        <div className="row add-wrapper">
                            <div className="col-9">
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Type name here..."
                                    ref="input"
                                />
                            </div>
                            <div className="col-3">
                                <button type="summit" className="btn btn-info added-btn">Add new</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

}

export default FormTasks;