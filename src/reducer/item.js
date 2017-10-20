import {
    SET_CALCULATE,
    SET_PROFILE,
    SET_FITTING,
    SET_SILL,
    SET_TIDE,
    SET_ITEM,
    SET_GLASS,
    SET_INSTALL,
    SET_LAMINATE,
    ADD_ITEM,
} from '../constants'
import randomId from '../utils/randomId'
import {Record} from 'immutable'

const ItemRecord = Record({
    id: randomId(),
    calculate: 'windows',
    profile: 'KBE Gut',
    glass: '2 стекла',
    fittings: 'Siegenia Favorit',
    laminate: 'Нет',
    sill: 'Нет',
    tide: 'Нет',
    selectItem: 1,
    install: 'Нет'
});

const defaultState = new ItemRecord();

export default (state = defaultState, action) => {
    const {type, payload} = action;

    switch (type) {
        case SET_CALCULATE:
            return state
                .set('calculate', payload.calculate)
                .set('profile', 'KBE Gut')
                .set('fittings', 'Siegenia Favorit')
                .set('sill', 'Нет')
                .set('tide', 'Нет')
                .set('glass', '2 стекла')
                .set('laminate', 'Нет')
                .set('selectItem', 1)
                .set('install', 'Нет');
        case SET_PROFILE:
            return state
                .set('profile', payload.profile);
        case SET_FITTING:
            return state
                .set('fittings', payload.fittings);
        case SET_SILL:
            return state
                .set('sill', payload.sill);
        case SET_TIDE:
            return state
                .set('tide', payload.tide);
        case SET_ITEM:
            return state
                .set('selectItem', payload.selectItem);
        case SET_GLASS:
            return state
                .set('glass', payload.glass);
        case SET_LAMINATE:
            return state
                .set('laminate', payload.laminate);
        case SET_INSTALL:
            return state
                .set('install', payload.install);
        case ADD_ITEM:
            return state
                .set('id', randomId());
        
        default:
            return state;
    }
}