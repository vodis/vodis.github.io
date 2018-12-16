import React, { Component } from "react";


class CommentAvatar extends React.Component {

    render() {
        if (this.props.identifier%2 === 0) {
            return (
                <div>
                    <img src="http://photoshop.tutfactory.com/wp-content/uploads/2009/09/twittertut11.jpg" width="60" height="60" />
                </div>
            );
        } else {
            return (
                <div>
                    <img src="http://files.softicons.com/download/game-icons/super-mario-icons-by-sandro-pereira/ico/Mushroom%20-%201UP.ico" width="60" height="60" />
                </div>
            );
        }
    }
}

export default CommentAvatar;