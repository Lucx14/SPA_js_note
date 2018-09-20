(function(exports) {
  function Note(content, number) {
    this.text = content;
    this.id = number;
  };

  Note.prototype.noteText = function() {
    return this.text;
  };

  Note.prototype.noteId = function() {
    return this.id;
  };

  exports.Note = Note;
})(this);
