import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { notesReducer } from "./noteReducer";

const middleware = [thunk];

const noteFromStorage = localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes') || '{}') : [];


const initialState = {
    notes: noteFromStorage
}

export const store = createStore(
    notesReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export type AppDispatch = typeof store.dispatch;
export type AppState = typeof store.getState;