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
    assert.isTrue(noteController.displayNotes() === result, "Controller model: displayNotes() can return a string of HTML");
  };

  returnsHTML();
})(this);
