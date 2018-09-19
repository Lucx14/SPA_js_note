(function(exports) {

  function viewTestSeveral() {

    var list = new List();
    list.createAndStore("Favourite food: pesto pasta");
    list.createAndStore("Favourite drink: seltzer");
    list.createAndStore("Favourite dessert: cake");
    var view = new View(list);

    if(view.displayHTML() !== "<ul><li><div>Favourite food: pesto pasta</div></li><li><div>Favourite drink: seltzer</div></li><li><div>Favourite dessert: cake</div></li></ul>") {
      throw new Error("List does not return required test output");
    } else {
      console.log("Successful");
    }
  };

  function viewTestOne() {

    var list = new List();
    list.createAndStore("Test");
    var view = new View(list);

    if(view.displayHTML() !== "<ul><li><div>Test</div></li></ul>") {
      throw new Error("List does not return required test output");
    } else {
      console.log("Successful");
    }
  };

  function viewTestEmpty() {
    var list = new List();
    var view = new View(list);

    if(view.displayHTML() !== "<ul><li><div></div></li></ul>") {
      throw new Error("List does not return required test output");
    } else {
      console.log("Successful");
    }
  };

  viewTestSeveral();
  viewTestOne();
  viewTestEmpty();
})(this);
