var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
   
    var message = {
    roomname:"liezelAnnie",
    text: $('input').val(),
    username: App.username
    }

    Parse.create(message, function() { console.log($('input').val())
      // var messageObject = new Messages(message);
      // MessagesView.renderMessage(message);
    })
    App.fetch(App.initialize);
   
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};

