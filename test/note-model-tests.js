(function(exports) {
  function testNoteReturn() {
    var note = new Note("My favorite language is Javascript");
    assert.isTrue(note.noteText() === "My favorite language is Javascript", "Note model: noteText() returns correct text");
  };
  testNoteReturn();
})(this);
