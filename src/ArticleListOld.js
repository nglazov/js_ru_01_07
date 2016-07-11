import React from 'react'
import Article from './Article'
import oneOpenArticle from './mixins/oneOpenArticle'

const ArticleListOld = React.createClass({
    mixins: [oneOpenArticle],
    render() {
        const { articles } = this.props

        const listItems = articles.map((article) => <li key={article.id}>
            <Article article = {article}
                     isOpen = {article.id == this.state.openArticleId}
                     openArticle = {this.openArticle(article.id)}
            />
        </li>)
        return (
            <div>
                <h1>Article list</h1>
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }
})

export default ArticleListOld