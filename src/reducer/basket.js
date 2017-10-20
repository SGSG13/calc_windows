import {
    ADD_ITEM,
    DELETE_ITEM
} from '../constants'

import {Record} from 'immutable'

const BasketRecord = Record({
   order: []
});

const defaultState = new BasketRecord();

export default (state = defaultState, action) => {
    const {type, payload} = action;

    switch (type) {
        case ADD_ITEM:
            return state
                .set('order', state.order.concat(payload.item));
        case DELETE_ITEM:
            return state
                .set('order', state.order.filter(item => item.id !== payload.id));
       
        default:
            return state;
    }
}