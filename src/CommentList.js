import React, {Component} from 'react'
import Comment from './Comment'

class CommentList extends Component {
    state = {
        isOpen: false
    }

    render() {
        const {comments} = this.props

        const items = comments.map((el)=> {
            return <Comment comment={el} key={el.id}/>
        })

        const itemList = (
            <ul>
                {items}
            </ul>
        )

        return (
            <div>
                <p onClick={this.toggleOpen}>{this.state.isOpen ? 'hide comments' : 'show comments'}</p>
                {this.state.isOpen ? itemList : null}
            </div>
        )
    }

    toggleOpen = ()=> {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default CommentList