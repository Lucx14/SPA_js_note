(function(exports) {
  function List() {
    this.notes = [];
  };

  List.prototype.seeNotes = function() {
    return this.notes;
  }

  List.prototype.createAndStore = function(string) {
    var note = new Note(string);
    this.notes.push(note);
    return note;
  };

  exports.List = List;
})(this);
