import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import { Record, List } from 'immutable'
import { recordsFromArray } from './utils'

const Article = Record({
    "id": "",
    "date": "",
    "title": "",
    "text": "",
    "comments": []
})

const defaultArticles = recordsFromArray(Article, normalizedArticles)

export default (articles = defaultArticles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articles.delete(payload.id)
        case ADD_COMMENT:
            let article = articles.get(action.payload.articleId)
            //а вот здесь ничего не происходит: ты создал новый объект статьи, но нигде ее не сохранил и она потерялась.
            //посмотри выше, как мы возвращаем новую коллекцию articles, так надо и здесь. Ниже есть посказка: articles.updateIn([id, 'comments'], comments => ...)
            //а так ты, на самом, деле возвращаешь полностью старую коллекцию, но сделав .push() в массив - ты его мутировал, и редакс этого не понял
            //надо было .concat(action.payload.id) и вернуть уже новый набор articles
            article.set('comments', article.get('comments').push(action.payload.id))

    }
    //articles.set()
    //articles.update()
    //articles.updateIn([id, 'comments'], comments => ...)
    return articles
}
