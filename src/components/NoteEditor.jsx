import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';

function NoteEditor({ onSubmit }) {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');

    const handleChange1 = (content) => {
        setInput1(content.target.value);
    };

    const handleChange2 = (content) => {
        setInput2(content.target.value);
    };

    const handleSend = (content) => {
        content.preventDefault();
        const newNote = {
            id: uuidv4(),
            title: input1,
            text: input2
        };
        onSubmit(newNote);
        setInput1('');
        setInput2('');
    };

    return (
        <form className="noteEditor" onSubmit={handleSend}>
            <div className='row'>
                <h2>Insertar Nota</h2>
                <div className="input-group mb-2" id='buscador'>
                    <span className="input-group-text">Título</span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Título"
                        aria-label="Título"
                        aria-describedby="basic-addon1"
                        onChange={handleChange1}
                        value={input1}
                    >
                    </input>
                </div>
                <div className="form-group mb-1">
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="1"
                        aria-label="Nota"
                        placeholder="Nota"
                        onChange={handleChange2}
                        value={input2}
                    >
                    </textarea>
                </div>
            </div>
            <button className="btn btn-primary mb-1">
                Guardar
            </button>
        </form>
    );
}

export default NoteEditor;

