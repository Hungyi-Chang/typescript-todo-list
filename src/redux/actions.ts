import { actionType } from "./helper";
import { AppDispatch, AppState } from "./store";


export const addNoteAction = (note: string) => {

    return (dispatch: AppDispatch, getState: AppState) => {
        dispatch({ type: actionType.ADD_NOTE, payload: note });
        localStorage.setItem('notes', JSON.stringify(getState().notes));
    }
}


export const deleteNoteAction = (note: string) => {

    return (dispatch: AppDispatch, getState: AppState) => {
        dispatch({ type: actionType.DELETE_NOTE, payload: note });
        localStorage.setItem('notes', JSON.stringify(getState().notes));
    }
}


export const clearNoteAction = () => {

    return (dispatch: AppDispatch, getState: AppState) => {
        dispatch({ type: actionType.CLEAR_NOTE, payload: '' });
        localStorage.removeItem('notes');
    }
}