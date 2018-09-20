(function(exports) {
  function testNoteReturn() {
    var note = new Note("My favorite language is Javascript", 0);
    assert.isTrue(note.noteText() === "My favorite language is Javascript", "Note model: noteText() returns correct text");
  };

  function testNumber() {
    var note = new Note("My favorite language is Javascript", 0);
    assert.isTrue(note.noteId() === 0, "Note model: noteId() returns correct id");
  };
  testNoteReturn();
  testNumber();
})(this);
