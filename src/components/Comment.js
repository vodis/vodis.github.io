import React, { Component } from "react";


class Comment extends React.Component {
    render() {
        return (
            <div>
                {this.props.newComment.map((post, index) => {
                    return (
                        <div key={index}>{post}</div>
                    );
                })}
            </div>
        );
    }
}

export default Comment;