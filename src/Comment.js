import React, {Component} from 'react'

class Comment extends Component {
    render() {
        const {comment} = this.props
        //лучше сделать Comment stateless-компонентом + не вносить li, а то сильно ограничиваете возможность переиспользовать компонент
        return (
            <li>
                <p>{comment.text}</p>
                <p>from {comment.user}</p>
            </li>
        )
    }
}

export default Comment
