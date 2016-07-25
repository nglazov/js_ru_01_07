import {ADD_COMMENT} from '../constants'

export default store => next => action => {
    //мидлвары лучше делать универсальными, что б можно было переиспользовать эту логику
    if (action.type === ADD_COMMENT) {
        //нужно ли здесь использовать имьютабл?
        //иммютабл использовать не стоит, но и экшн менять - плохая практика, лучше сделть newAction = {...action, randomId}
        //а вот так генерировать id - плохо, никаких гарантий уникальности совсем
        action.payload.id = store.getState().comments.last().id + 1
        next(action)
    }
}
