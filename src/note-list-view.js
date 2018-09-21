(function(exports) {

  function View(list) {
    this.list = list;
  };


  View.prototype.displayHTML = function() {
    var textArray = this.list.seeNotes().map(note => "<a href='#note/" + note.noteId() + "'>" + note.noteId() + ": " + note.noteText().slice(0,20) + "...</a>");
    return "<ul><li><div>" + textArray.join('</div></li><li><div>') + "</div></li></ul>";
  };

  exports.View = View;
})(this);
