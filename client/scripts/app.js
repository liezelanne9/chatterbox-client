var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);
    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();
    Friends.initialize();
    Rooms.initialize();
    
    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    
    // setInterval(App.fetch, 1000);
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      for(let i = 0; i < data.results.length; i++){
        var obj = data.results[i];
        obj.text = obj.text || '';

        obj.username = obj.username || 'Anon';
        obj.roomname = obj.roomname || '';

        MessagesView.renderMessage(obj);
        RoomsView.renderRoom(obj.roomname);
      }
      // let empty = $('#chats').empty()
      // setTimeout(empty, 900);
      //setTimeout(App.fetch, 1000);
      callback();

    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
