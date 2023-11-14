import React, { useState } from "react";
import Note from './Note.jsx';
import NoteEditor from './NoteEditor.jsx';

function NoteList() {
    const [notes, setNotes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const deleteNote = (id) => {
        const updatedNotes = notes.filter(note => note.id !== id);
        setNotes(updatedNotes);
        localStorage.setItem("notes", JSON.stringify(updatedNotes));
        JSON.parse(localStorage.getItem("notes"));
    };

    const addNote = (note) => {
        if (note.text.trim()) {
            note.text = note.text.trim();
            const updatedNotes = [...notes, note];
            setNotes(updatedNotes);
            localStorage.setItem("notes", JSON.stringify(updatedNotes));
            JSON.parse(localStorage.getItem("notes"));
        }
    };

    const filteredNotes = notes.filter(note =>
        note.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="row">
            <div className="input-group mb-3" id='buscador'>
                    <span className="input-group-text">Buscador</span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nota"
                        aria-label="Nota"
                        aria-describedby="basic-addon1"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    >
                    </input>
            </div>
            <NoteEditor onSubmit={addNote} />
            {
                filteredNotes.map((note) =>
                    <Note
                        key={note.id}
                        id={note.id}
                        text={note.text}
                        title={note.title}
                        deleteNote={deleteNote}
                    />
                )
            }
        </div>
    );
}

export default NoteList;
