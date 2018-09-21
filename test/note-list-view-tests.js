(function(exports) {

  function viewTestSeveral() {
    var list = new List();
    list.createAndStore("Favourite food: pesto pasta");
    list.createAndStore("Favourite drink: seltzer");
    list.createAndStore("Favourite dessert: cake");
    var view = new View(list);
    var result = "<ul><li><div><a href='#note/0'>0: Favourite food: pest...</a></div></li><li><div><a href='#note/1'>1: Favourite drink: sel...</a></div></li><li><div><a href='#note/2'>2: Favourite dessert: c...</a></div></li></ul>"
    assert.isTrue(view.displayHTML() === result, "View model: The view renders several notes");
  };

  function viewTestOne() {
    var list = new List();
    list.createAndStore("Test");
    var view = new View(list);
    var result = "<ul><li><div><a href='#note/0'>0: Test...</a></div></li></ul>";
    assert.isTrue(view.displayHTML() === result, "View model: The view can render a single note");
  };

  function viewTestEmpty() {
    var list = new List();
    var view = new View(list);
    var result = '<ul><li><div></div></li></ul>';
    assert.isTrue(view.displayHTML() === result, "View model: The view can render with no notes");
  };

  viewTestSeveral();
  viewTestOne();
  viewTestEmpty();
})(this);
