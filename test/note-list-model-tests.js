(function(exports) {

  function instantiatesWithEmptyArray() {
    var list = new List();
    assert.isTrue(list.notes.constructor === Array, "List model: List instantiates with an empty array");
  };

  function seeNotesReturnsAnArray() {
    var list = new List();
    assert.isTrue((list.seeNotes()).length === 0, "List model: seeNotes() function returns the list array");
  };

  function CreateAndStoreStoresNoteInArray() {
    var list = new List();
    list.createAndStore("Favourite drink: seltzer");
    assert.isTrue(list.notes[0].text === "Favourite drink: seltzer", "List model: can store a new note in the list array");
  };

  function createAndStoreIncreasesCounter() {
    var list = new List();
    list.createAndStore("This is a note");
    list.createAndStore("This is another note");
    assert.isTrue(list.counter === 2, "List model: Creating a note increases the counter by one");
  }

  instantiatesWithEmptyArray();
  seeNotesReturnsAnArray();
  CreateAndStoreStoresNoteInArray();
  createAndStoreIncreasesCounter();
})(this);
