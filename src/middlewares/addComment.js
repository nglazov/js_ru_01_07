import {ADD_COMMENT} from '../constants'

export default store => next => action => {
    if (action.type === ADD_COMMENT) {
        //нужно ли здесь использовать имьютабл?
        action.payload.id = store.getState().comments.last().id + 1
        next(action)
    }
}