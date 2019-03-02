var FormView = {

  $form: $('form'),
  $button: $('button'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
    FormView.$button.on('click', FormView.handleRoom);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
   
    var message = {
      roomname: $('select').val(),
      text: $('input').val(),
      username: App.username
    };

    Parse.create(message);
    // MessagesView.renderMessage(message);
    $('#chats').empty();
    App.fetch();
  
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  },

  handleRoom: function(event) {
    message.roomname = $('input').val();
    RoomsView.renderRoom(message.roomname);
  }
};

