(function(exports) {


  function returnsHTML() {

    var noteController = new NoteController();
    noteController.createNote("Test");

    if(noteController.displayNotes() !== "<ul><li><div>Test</div></li></ul>") {
      throw new Error("List does not return required test output");
    } else {
      console.log("Successful");
    }
  };


  returnsHTML();
})(this);
