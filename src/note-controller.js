(function(exports) {


  // viewer = View as argument?
  function NoteController(list = new List()) {
    this.list = list;
    this.view = new View(this.list);
    // ??
    // this.singleNote = new SingleNote(note);
  };

  // so it looks like when targeting the element we might be able to targert by href?
  // makeUrlChangeShowAnimalForCurrentPage();



  // displays notes
  // add an element as argument
  NoteController.prototype.displayNotes = function() {
    document
    .getElementById("app")
    .innerHTML = this.view.displayHTML();
    // console.log(window.location.hash.substring(6));
    return document.getElementById("app").innerHTML;
  };

  // creates new note
  NoteController.prototype.createNote = function(string) {
    this.list.createAndStore(string);
  };



  // setting up TESTING URL CHANGE VIEW ******************************

  // NoteController.prototype.makeUrlChangeShowNoteForCurrentPage = function() {
  //   window.addEventListener("hashchange", showNoteForCurrentPage());
  // };
  //
  // NoteController.prototype.showNoteForCurrentPage = function() {
  //   showSingleNote(getNoteFromUrl(window.location));
  //   //  this part is the key i think
  // };
  //
  // NoteController.prototype.getNoteFromUrl = function(location) {
  //   return location.hash.substring(6);
  // };

  NoteController.prototype.showSingleNote = function() {
    document
    .getElementById("app")
    .innerHTML = this.singleNote.displayHTML();
  };

  // ******************************************************************


  exports.NoteController = NoteController;

})(this);
