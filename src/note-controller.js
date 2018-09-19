(function(exports) {

  function NoteController(list = new List()) {
    this.list = list;
  };


  NoteController.prototype.displayNotes = function() {
    var view = new View(this.list);
    document.getElementById("app").innerHTML = view.displayHTML();
    return document.getElementById("app").innerHTML;
  };


  NoteController.prototype.createNote = function(string) {
    this.list.createAndStore(string);
  };




  exports.NoteController = NoteController;
})(this);
