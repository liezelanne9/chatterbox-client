var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessage: function(message) {
    this.$chats.append(MessageView.render(message));
  }

};