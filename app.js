import chalk from 'chalk';
import notes from './notes.js';
// import yargs from 'yargs';
const yargs=require('yargs');
yargs
    .command({
        command:'add',
        describe:'Adding command',
        handler: argv => {
            console.log('Adding notes');
        }
    })
    .parse();
// import chalk from 'chalk'
// import { version, command } from 'yargs'
// import getNotes from './notes.js'

// // Customize yargs version
// version('1.1.0')

// // Create add command
// command({
//     command: 'add',
//     describe: 'Add a new note',
//     handler: function () {
//         console.log('Adding a new note!')
//     }
// })

// // Create remove command
// command({
//     command: 'remove',
//     describe: 'Remove a note',
//     handler: function () {
//         console.log('Removing the note')
//     }
// })

// // Create list command
// command({
//     command: 'list',
//     describe: 'List your notes',
//     handler: function () {
//         console.log('Listing out all notes')
//     }
// })

// // Create read command
// command({
//     command: 'read',
//     describe: 'Read a note',
//     handler: function () {
//         console.log('Reading a note')
//     }
// })

// console.log(argv)