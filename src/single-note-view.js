(function(exports) {

  function SingleNote(note) {
    this.note = note;
  };

  SingleNote.prototype.displayHTML = function() {
    return `<div>${this.note.noteText()}</div>`;
  };

  exports.SingleNote = SingleNote;
})(this);




// i think its here that i need to put the functionality to render a
