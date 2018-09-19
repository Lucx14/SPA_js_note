(function(exports) {

  function NoteController(list = new List()) {
    this.list = list;
    this.view = new View(this.list);
  };

  NoteController.prototype.displayNotes = function() {
    document.getElementById("app").innerHTML = this.view.displayHTML();
    console.log(document.getElementById("app").innerHTML);
    return document.getElementById("app").innerHTML;
  };

  NoteController.prototype.createNote = function(string) {
    this.list.createAndStore(string);
  };

  exports.NoteController = NoteController;
})(this);
