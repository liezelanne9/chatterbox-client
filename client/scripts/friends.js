var Friends = {

    $chat: $('div'),

    initialize: function() {
        Friends.$chat.on('click', '.chat', '.username', Friends.toggleFriend);
      },

    friendList: [],

    toggleFriend: function(event) {
        var friend = event.currentTarget.childNodes[1].childNodes["0"].data
        if (!friendList.includes(friend)) {
            friendList.push(friend);
        } else {
            friendList.splice()
        }
        console.log(friend);
    },

};