var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  renderRoom: function(lobby) {
    this.$select.append(`<option>${lobby}</option>`);
  }
  
};
