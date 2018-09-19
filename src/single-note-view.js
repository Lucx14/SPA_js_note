(function(exports) {

  function SingleNote(note) {
    this.note = note;
  };

  SingleNote.prototype.displayHTML = function() {
    return `<div>${this.note.noteText()}</div>`;
  };

  exports.SingleNote = SingleNote;
})(this);
