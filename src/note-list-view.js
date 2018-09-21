(function(exports) {

  function View(list) {
    this.list = list;
  };


  View.prototype.displayHTML = function() {
    var textArray = this.list.seeNotes().map(note => note.noteId() + ": " + note.noteText().slice(0,20) + "...");
    // return "<ul><li><div><a href='#note'>" + textArray.join('</a></div></li><li><div><a href="#note">') + "</a></div></li></ul>";
    return `<ul><li><div><a href="#note">${textArray.join('</a></div></li><li><div><a href="#note">')}</a></div></li></ul>`;
  };

  exports.View = View;
})(this);
