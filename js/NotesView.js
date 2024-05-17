export default class NotesView {
    constructor(root, {  onNoteSelect, onNoteAdd, onNoteEdit, onNoteDelete } = {} ) {
        this.root = root
        this.onNoteSelect = onNoteSelect
        this.onNoteAdd = onNoteAdd
        this.onNoteEdit = onNoteEdit
        this.onNoteDelete = onNoteDelete
        this.root.innerHTML = 
        `
        <div class='notes__sidebar'>
            <button class='notes__add' type='button'>Add Note</button>
        
        
        `
    }
}