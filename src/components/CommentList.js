import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import AddComment from '../containers/AddComment'
import toggleOpen from '../decorators/toggleOpen'

import { addComment } from '../AC/comments'

import { connect } from 'react-redux'

class CommentList extends Component {

    componentWillMount() {
        console.log('---', this.props)
    }
    componentDidMount() {
        console.log('---', 'mounted', this.refs.toggler)
    }

    componentWillReceiveProps(nextProps) {
        console.log('---', this.props.isOpen, nextProps.isOpen)
    }

    componentWillUnmount() {
        console.log('---', 'unmounting')
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.isOpen != this.props.isOpen
    }

    render() {

        const { commentObjects, isOpen, toggleOpen, articleId } = this.props

        console.log(commentObjects)
        if (!commentObjects || !commentObjects.length) return <h3>no comments yet</h3>

        const commentItems = commentObjects.map(comment => <li key = {comment.id}><Comment comment = {comment}/></li>)
        const body = isOpen ? <ul>{commentItems}</ul> : null
        const linkText = isOpen ? 'close comments' : 'show comments'
        return (
            <div>
                <a href="#" onClick = {toggleOpen} ref="toggler">{linkText}</a>
                {body}
                <AddComment handleSubmit={this.handleSubmit}/>
            </div>
        )
    }

    handleSubmit = (author, text)=>{
        const {addComment, articleId} = this.props
        addComment(articleId, author, text)
    }
}

//тогда стоит наоборот CommentList перенести в контейнеры, а AddComment в компоненты, раз он никак на стор не завязан
export default connect((state, {comments}) => {
    return {

            commentObjects: comments.map(id => state.comments.get(id))
        }
    },
    {addComment})(toggleOpen(CommentList))
