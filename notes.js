console.log('Starting notes.js');
const fs = require('fs');


const fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

const saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

let addNote = (title, body) => {
    let notes = fetchNotes();
    let note = {
        title,
        body
    };
    let duplicateNotes = notes.filter((note) => note.title === title);
    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

const getAll = () => {
    // console.log('Getting all notes');
    return fetchNotes();
};

const getNote = (title) => {
    // console.log('Getting note', title);
    let note = fetchNotes();
    let noteToBeRead = note.filter((note) => note.title === title);
    return noteToBeRead[0];
};

const removeNote = (title) => {
    // console.log('Removing note', title);
    let notes = fetchNotes();
    let filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;

};
const logNote = (note) => {
    console.log('-----');
    console.log(`Title: ${note.title}`);
    console.log(`Body:${note.body}`);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};