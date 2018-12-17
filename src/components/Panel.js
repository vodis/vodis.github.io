import React from 'react';
import '../App.css';
import './Panel.css';

class Panel extends React.Component {
    render() {
        return (
            <div className="panel col-2">
                    <div className="wrapper">
                        <div className="content_p">
                            <h1 className="title p-2">dairy app</h1>
                            <p className="subtitle"> Comment with no sense </p>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Panel;