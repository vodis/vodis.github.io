import React from "react";


class CommentAvatar extends React.Component {

    render() {
        if (this.props.identifier%2 === 0) {
            return (
                <div className="col-1 avatar avatar-props-1"></div>
            );
        } else {
            return (
                <div className="col-1 avatar avatar-props-2"></div>
            );
        }
    }
}

export default CommentAvatar;