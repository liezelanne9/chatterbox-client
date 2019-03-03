var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  renderRoom: function(lobby) {
    if(!($('option').hasClass(lobby.replace(/ /gi, '')))) {
      this.$select.append(`<option class='${lobby.replace(/ /gi, '')}'>${lobby}</option>`);
    }
  }
  
};