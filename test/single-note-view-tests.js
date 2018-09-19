(function(exports) {

  function tests() {
    var note = new Note("Testing");
    var singleNote = new SingleNote(note);
    var htmlstring = "<div>Testing</div>"
    assert.isTrue(singleNote, "Single note view: can be instantiated");
    assert.isTrue(singleNote.displayHTML() === htmlstring, "Single note view: displayHTML() can return a string of HTML");
  };

  tests();
})(this);
