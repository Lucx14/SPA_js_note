(function(exports) {

  function returnsHTML() {
    var noteController = new NoteController();
    noteController.createNote("Test");
    var result = "<ul><li><div>Test</div></li></ul>";
    assert.isTrue(noteController.displayNotes() === result, "Controller model: displayNotes() can return a string of HTML");
  };

  returnsHTML();
})(this);
