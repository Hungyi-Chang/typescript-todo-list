import React from 'react'
import {
    VideoContainer, Container, VideoBg, TodoListWrapper, Header,
    ListContainer, ListItem, Footer, ButtonClear, SpanList
} from './TodoListElement'
import Video from '../../videos/video.mp4';
import { useSelector, useDispatch } from 'react-redux';
import { addNoteAction, clearNoteAction, deleteNoteAction } from '../../redux/actions';
import { NoteState } from '../../redux/noteReducer';
import InputComponent from '../InputComponent/InputComponent';




const TodoList: React.FC = () => {
    const notes = useSelector<NoteState, NoteState["notes"]>((state) => state.notes);
    const dispatch = useDispatch();

    const addNote = (note: string) => {
        dispatch(addNoteAction(note));
    }
    const removeNote = (note: string) => {
        dispatch(deleteNoteAction(note));
    }
    const clearNote = () => {
        dispatch(clearNoteAction());
    }
    return (
        <>
            <Container>
                <VideoContainer>
                    <VideoBg autoPlay loop muted>
                        <source src={Video} type="video/mp4" />
                    </VideoBg>
                </VideoContainer>
                <TodoListWrapper>
                    <Header>Todo List</Header>
                    <InputComponent addNote={addNote} />
                    <ListContainer>
                        {
                            notes.map((note, i) => {
                                return <ListItem key={i}>{note}<SpanList onClick={(event: React.MouseEvent<HTMLElement>) => removeNote(note)}><i className="fas fa-trash"></i></SpanList></ListItem>
                            })
                        }


                    </ListContainer>
                    <Footer>
                        <span>You have {notes.length} pending tasks</span>
                        <ButtonClear onClick={clearNote}>Clear All</ButtonClear>
                    </Footer>
                </TodoListWrapper>
            </Container>
        </>
    )
}

export default TodoList;