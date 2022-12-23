import { ListAction, ListActionTypes } from "./action";

export interface Elem {
    time: number
}

type ListState = Elem[] | any
export const listState = [];

export function listReducer(state = listState, action: ListAction): ListState {
    switch (action.type) {

        case ListActionTypes.ADD_ELEM: {
            return [...state, action.elem];
        }

        case ListActionTypes.DELETE_ELEM: {
            return [...state.filter(item => item !== action.elem)];
        }

        case ListActionTypes.CHANGE_ELEM: {
            return [...state.map((item: Elem) => item.time - 1)];
        }

        default:
            return state;
    }

}