(function(exports) {
  function Note(content) {
    this.text = content;
  };

  Note.prototype.noteText = function() {
    return this.text;
  };

  exports.Note = Note;
})(this);
