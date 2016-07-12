import React from 'react'

export default (Component) => class DecoratedComponent extends React.Component {
    state = {
        openArticleId: null
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('---', nextState.openArticleId)
    }

  //привязка к статье в названиях плохо - вы же создаете декоратор для переиспользования логики в других местах, почему openArticle, openArticleId?
    openArticle = id => ev => {
        if (ev) ev.preventDefault()

        this.setState({
            openArticleId: this.state.openArticleId === id ? null : id
        })
    }

    render() {
        return <Component {...this.props}
            openArticle = {this.openArticle}
            openArticleId = {this.state.openArticleId}
        />
    }
}
