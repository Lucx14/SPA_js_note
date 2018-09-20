(function(exports) {

  function NoteController(list = new List()) {
    this.list = list;
    this.view = new View(this.list);
  };

  // so it looks like when targeting the element we might be able to targert by href?

  // NoteController.prototype.showNoteForCurrentPage() {
  //   displayNotes();
  // };
  //
  // NoteController.prototype.getNoteFromUrl(location) {
  //   return location.hash.split("#")[1];
  // };


  NoteController.prototype.displayNotes = function() {
    document
    .getElementById("app")
    .innerHTML = this.view.displayHTML();
    return document.getElementById("app").innerHTML;
  };

  NoteController.prototype.createNote = function(string) {
    this.list.createAndStore(string);
  };

  exports.NoteController = NoteController;
})(this);
