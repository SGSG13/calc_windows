import {
    SET_CALCULATE,
    SET_PROFILE,
    SET_FITTING,
    SET_SILL,
    SET_TIDE,
    SET_ITEM,
    SET_GLASS,
    SET_LAMINATE,
    SET_INSTALL,
    ADD_ITEM,
    DELETE_ITEM
} from '../constants'

export function setCalculate(calculate) {
    return {
        type: SET_CALCULATE,
        payload: { calculate }
    }
}

export function setProfile(profile) {
    return {
        type: SET_PROFILE,
        payload: { profile }
    }
}

export function setFitting(fittings) {
    return {
        type: SET_FITTING,
        payload: { fittings }
    }
}

export function setSill(sill) {
    return {
        type: SET_SILL,
        payload: { sill }
    }
}

export function setTide(tide) {
    return {
        type: SET_TIDE,
        payload: { tide }
    }
}

export function setItem(selectItem) {
    return {
        type: SET_ITEM,
        payload: { selectItem }
    }
}

export function setGlass(glass) {
    return {
        type: SET_GLASS,
        payload: { glass }
    }
}

export function setLaminate(laminate) {
    return {
        type: SET_LAMINATE,
        payload: { laminate }
    }
}

export function setInstall(install) {
    return {
        type: SET_INSTALL,
        payload: { install }
    }
}

export function addItem(item) {
    return {
        type: ADD_ITEM,
        payload: { item }
    }
}

export function deleteItem(id) {
    return {
        type: DELETE_ITEM,
        payload: { id }
    }
}

