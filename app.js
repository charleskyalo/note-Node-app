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
    .usage(`Usage: $0 <command> [options]`)
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
    .help('h')
    .alias('h', 'help')
    .epilog('copyright 2020')
    .argv;
let command = argv._[0];
process.stdout.write(`Command:  ${command} \n`);


if (command === 'add') {
    const note = notes.addNote(argv.title, argv.body);
    if (note) {
        process.stdout.write(` Note created \n`);
        notes.logNote(note);
    } else {
        process.stdout.write('Note title taken \n');
    }
} else if (command === 'list') {
    let allNotes = notes.getAll();
    process.stdout.write(` Printing ${allNotes.length} note(s)\n`);
    allNotes.forEach(singleNote => notes.logNote(singleNote));

} else if (command === 'read') {
    const readNote = notes.getNote(argv.title);
    if (readNote) {
        process.stdout.write(`Note found \n`);
        notes.logNote(readNote);
    } else {
        process.stdout.write(`Note not found \n`);
    }
} else if (command === 'remove') {
    let noteRemoved = notes.removeNote(argv.title);
    let message = noteRemoved ? "Note was removed " : "Note not found ";
    process.stdout.write(`${message} \n`);
} else if (command === undefined) {
    process.stdout.write(`type  'node app.js --h' to see usage of the application\n`);
} else {
    process.stdout.write(`Command not recognized \n`);
}