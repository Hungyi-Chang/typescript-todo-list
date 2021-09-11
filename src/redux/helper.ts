export type Action = { type: string; payload: string };
export const actionType = {
    ADD_NOTE: 'ADD_NOTE',
    DELETE_NOTE: 'DELETE_NOTE',
    CLEAR_NOTE: 'CLEAR_NOTE'
}