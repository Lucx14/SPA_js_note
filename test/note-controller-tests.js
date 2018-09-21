(function(exports) {
  // function NoteBookDouble(){}
  // NoteBookViewDouble.prototype.returnHtml = function() {
  //   return: "test note";
  // };
  // var view = {
  //   displayHTML: "Test"
  // };


  function returnsHTML() {
    var noteController = new NoteController();
    noteController.createNote("Test");
    var result = '<ul><li><div><a href="#note/0">0: Test...</a></div></li></ul>';
    var result1 = '<div>Test</div>'
    assert.isTrue(noteController.displayNotes() === result, "Controller model: displayNotes() can return a string of HTML");
    // assert.isTrue(noteController.showSingleNote(noteId) === result1, "Controller model: displaySingleNote() can render a single note on page");
  };



  returnsHTML();
})(this);
