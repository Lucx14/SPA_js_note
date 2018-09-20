(function(exports) {
  function List() {
    this.notes = [];
    this.counter = 0;
  };

  List.prototype.seeNotes = function() {
    return this.notes;
  }


  List.prototype.count = function() {
    this.counter++;
  }

  List.prototype.createAndStore = function(string) {
    var note = new Note(string, this.counter);
    this.notes.push(note);
    this.count();
    return note;
  };

  exports.List = List;
})(this);
