import React, {Component}  from 'react'
import Article from './Article'
import oneOpenArticle from './decorators/oneOpenArticle'

function ArticleList(props) {
    const {articles, openArticle, openArticleId} = props

    const listItems = articles.map((article) => <li key={article.id}>
        <Article article={article}
                 isOpen={article.id === openArticleId}
                 openArticle={ openArticle(article.id) }
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

export default oneOpenArticle(ArticleList)