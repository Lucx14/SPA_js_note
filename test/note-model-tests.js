(function(exports) {
  function testNoteReturn() {
    var note = new Note("My favorite language is Javascript");

    if(note.noteText() !== "My favorite language is Javascript") {
      throw new Error("Note does not retrun required test output");
    } else {
      console.log("Successful");
    }
  };

  testNoteReturn();

})(this);
