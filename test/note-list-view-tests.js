(function(exports) {

  function viewTestSeveral() {
    var list = new List();
    list.createAndStore("Favourite food: pesto pasta");
    list.createAndStore("Favourite drink: seltzer");
    list.createAndStore("Favourite dessert: cake");
    var view = new View(list);
    var result = "<ul><li><div>Favourite food: pesto pasta</div></li><li><div>Favourite drink: seltzer</div></li><li><div>Favourite dessert: cake</div></li></ul>"
    assert.isTrue(view.displayHTML() === result, "View model: The view renders several notes");
  };

  function viewTestOne() {
    var list = new List();
    list.createAndStore("Test");
    var view = new View(list);
    var result = "<ul><li><div>Test</div></li></ul>";
    assert.isTrue(view.displayHTML() === result, "View model: The view can render a single note");
  };

  function viewTestEmpty() {
    var list = new List();
    var view = new View(list);
    var result = "<ul><li><div></div></li></ul>";
    assert.isTrue(view.displayHTML() === result, "View model: The view can render with no notes");
  };

  viewTestSeveral();
  viewTestOne();
  viewTestEmpty();
})(this);
