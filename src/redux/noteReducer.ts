import { Action, actionType } from './helper'
export interface NoteState {
    notes: string[];
}

const initialState = {
    notes: [],
}


export const notesReducer = (state: NoteState = initialState, action: Action) => {
    switch (action.type) {
        case actionType.ADD_NOTE:
            return { ...state, notes: [...state.notes, action.payload] }
        case actionType.DELETE_NOTE:
            return { ...state, notes: state.notes.filter(cur => cur !== action.payload) }
        case actionType.CLEAR_NOTE:
            return { notes: [] }
        default:
            return state;
    }
}