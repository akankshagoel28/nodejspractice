import { writeFileSync, readFileSync } from 'fs'
import chalk from 'chalk'

function listNotes() { 
    console.log(chalk.inverse('Your notes.....'))
    const notes = loadNotes()
    notes.forEach(note=>
        console.log(note.title))
 }
 function readNotes(title){
    const notes=loadNotes()
    const note=notes.find((note)=> note.title===title)
        if(note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
        }
        else{
                console.log(chalk.red.inverse("No note found"))
            }
        }
        
 

 
 function addNote(title, body) {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter( (note) =>
    //  note.title === title
    // )
    const duplicateNote=notes.find((note)=> note.title==title)
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

 function removeNote(title) {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) =>
       note.title !== title)

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }
}

const saveNotes =(notes)=> {
    const dataJSON = JSON.stringify(notes)
    writeFileSync('notes.json', dataJsON)
}

const loadNotes = ()=>{
    try {
        const dataBuffer = readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}


export default {addNote, removeNote,listNotes,readNotes}
