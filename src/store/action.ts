import { Elem } from "./reducer";

export enum ListActionTypes {
    ADD_ELEM = 'ADD_ELEM',
    DELETE_ELEM = 'DELETE_ELEM',
    CHANGE_ELEM = 'CHANGE_ELEM',
}

function interLiteralFromString<T extends string>(arg: T) {
    return arg;
}

export const addElem = (elem: Elem) => ({
    type: interLiteralFromString('ADD_ELEM'),
    elem
})

export const deleteElem = (elem: Elem) => ({
    type: interLiteralFromString('DELETE_ELEM'),
    elem
})

export const changeElem = () => ({
    type: interLiteralFromString(ListActionTypes.CHANGE_ELEM),
})

export type ListAction = ReturnType<typeof deleteElem> | ReturnType<typeof addElem> | ReturnType<typeof changeElem>;
