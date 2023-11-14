import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import './Note.css';

function Note({ id, text, title, deleteNote }) {

    return (
        <div className="note-conteiner">
            <div id="nota">
                <div className='titulo'>
                    <h3>{title}</h3>
                </div>
                <div className='texto mb-3'>
                    {text}
                </div>
                <button className="btn btn-danger mb-3" onClick={() => deleteNote(id)}>
                    Eliminar
                </button>
            </div>
        </div>
    );
}

export default Note;
