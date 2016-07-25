import { ADD_COMMENT } from '../constants'

export function addComment(articleId, text, user) {
    return {
        type: ADD_COMMENT,
        payload: { articleId, text, user }
    }
}