let notes = [];
let note = localStorage.getItem('note');
if (note != null) {
    notes = JSON.parse (note);
    generateNotes();
}

function addNote() {
    let note = document.getElementById("note").value;
    tittle = document.getElementById("title").value;
    notes.push({note: note, tittle: tittle});
    localStorage.setItem("title", tittle);
    localStorage.setItem('note', JSON.stringify(notes));
    generateNotes();
}

function generateNotes(){
    let showNote = "";
    for (let note of notes) {
        showNote += `<p><strong>${note.tittle}:</strong> ${note.note}</p>`;
    }
    document.getElementById("old-notes").innerHTML = showNote;
}