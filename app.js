const process = require('process');
process.stdout.write('Starting app.js \n');
const notes = require('./notes.js');

const yargs = require('yargs');
const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
}
const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
}

const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'list all notes')
    .command('read', 'Read a note', {
        title: titleOptions
    })
    .command('remove', 'Remove a note', {
        title: titleOptions
    })
    .help()
    .argv;
let command = argv._[0];
process.stdout.write(`Command:  ${command} \n`);


if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        process.stdout.write(` Note created \n`);
        notes.logNote(note);
    } else {
        process.stdout.write('Note title taken \n');
    }
} else if (command === 'list') {
    let allNotes = notes.getAll();
    console.log(` Printing ${allNotes.length} note(s)`);
    allNotes.forEach(note => notes.logNote(note));

} else if (command === 'read') {
    let note = notes.getNote(argv.title);
    if (note) {
        process.stdout.write(`Note found \n`);
        notes.logNote(note);
    } else {
        process.stdout.write(`Note not found \n`);
    }
} else if (command === 'remove') {
    let noteRemoved = notes.removeNote(argv.title);
    let message = noteRemoved ? "Note was removed " : "Note not found ";
    process.stdout.write(`${message} \n`);
} else if (command === undefined) {
    process.stdout.write(`please input a command \n`);

} else {
    process.stdout.write(`Command not recognized \n`);
}