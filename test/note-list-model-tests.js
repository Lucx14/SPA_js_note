(function(exports) {
  function testNoteListReturn() {

    var list = new List();
    var note = new Note("Hello!!");
    list.addNote(note);

    if(list.seeNotes()[0].noteText() !== "Hello!!") {
      throw new Error("List does not return required test output");
    } else {
      console.log("Successful");
    }
  };

  testNoteListReturn();


})(this);
