(function(exports) {

  function View(list) {
    this.list = list;
  };


  View.prototype.displayHTML = function() {
    var textArray = this.list.seeNotes().map(note => note.noteText().slice(0,20));
    return "<ul><li><div>" + textArray.join('</div></li><li><div>') + "</div></li></ul>";
  };

  exports.View = View;
})(this);
