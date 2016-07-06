import React, {Component} from 'react'

class Comment extends Component {
    render() {
        const {comment} = this.props
        return (
            <li>
                <p>{comment.text}</p>
                <p>from {comment.user}</p>
            </li>
        )
    }
}

export default Comment