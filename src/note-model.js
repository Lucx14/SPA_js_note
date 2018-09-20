(function(exports) {
  function Note(content, id) {
    this.text = content;
    this.id = id;
  };

  Note.prototype.noteText = function() {
    return this.text;
  };

  Note.prototype.noteId = function() {
    return this.id;
  };

  exports.Note = Note;
})(this);
