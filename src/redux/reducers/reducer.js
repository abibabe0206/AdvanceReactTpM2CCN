import { FILTER_BY_PRODUCT, RENAME_LIST } from '../actions/action'
import { combineReducers } from 'redux'

function reduceTitle(state = 'Integration Weekend', action) {
    switch (action.type) {
        case RENAME_LIST:
            return action.title
        default:
            return state
    }
}

function reduceFilterByProduct(state = '', action) {
    switch (action.type) {
        case FILTER_BY_PRODUCT:
            return action.product

        default:
            return state
    }
}


export default function createRootReducer(asyncReducers) {
    return combineReducers({
        title: reduceTitle,
        product: reduceFilterByProduct,
        ...asyncReducers
    });
}