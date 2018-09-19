// TESTS

(function(exports) {



  function tests() {

    var note = new Note("Testing");
    var singleNote = new SingleNote(note);
    var htmlstring = "<div>Testing</div>"

    assert.isTrue(singleNote);
    assert.isTrue(singleNote.displayHTML() === htmlstring)


  }

  tests();
})(this);
