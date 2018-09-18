(function(exports) {

  function instantiatesWithEmptyArray() {
    var list = new List();
    if(list.notes.constructor !== Array) {
      throw new Error("List does not return required test output");
    } else {
      console.log("Successful");
    }
  };

  function seeNotesReturnsAnArray() {
    var list = new List();
    if((list.seeNotes()).length !== 0) {
      throw new Error("List does not return required test output");
    } else {
      console.log("Successful");
    }
  };

  function CreateAndStoreStoresNoteInArray() {
    var list = new List();
    list.createAndStore("Favourite drink: seltzer");
    if(list.notes[0].text !== "Favourite drink: seltzer") {
      throw new Error("List does not return required test output");
    } else {
      console.log("Successful");
    }
  };

  instantiatesWithEmptyArray();
  seeNotesReturnsAnArray();
  CreateAndStoreStoresNoteInArray();
})(this);
