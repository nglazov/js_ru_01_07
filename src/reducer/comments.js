import {  } from '../constants'
import { normalizedComments } from '../fixtures'
import { Record } from 'immutable'
import { recordsFromArray } from './utils'
import { ADD_COMMENT } from '../constants'

const Comment = Record({
    "id": null,
    "user": "",
    "text": ""
})

const defaultComments = recordsFromArray(Comment, normalizedComments)

export default (comments = defaultComments, action) => {
    const { type, payload, response, error } = action

    switch (type) {
        case ADD_COMMENT:
            const {id} = action.payload
                return comments.set(id, new Comment(action.payload))
    }

    return comments
}