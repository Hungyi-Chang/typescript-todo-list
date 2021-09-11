import React, { useState, ChangeEvent } from 'react'
import { ButtonInput, Input, InputWrapper } from './InputComponentElements';

type Props = { addNote: (note: string) => void; }

const InputComponent = (prop: Props) => {
    const [note, setNote] = useState("")
    return (
        <>
            <InputWrapper>
                <Input onChange={(e: ChangeEvent<HTMLInputElement>) => setNote(e.target.value)} value={note} type="text" placeholder="Add your new task" />
                <ButtonInput onClick={() => {
                    prop.addNote(note);
                    setNote("");
                }}><i className="fas fa-plus"></i></ButtonInput>
            </InputWrapper>
        </>
    )
}

export default InputComponent;