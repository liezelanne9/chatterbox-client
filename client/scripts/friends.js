var Friends = {

    $chat: $('div'),

    initialize: function() {
        Friends.$chat.on('click', '.username', Friends.toggleFriend);
      },

    friendList: {},

    toggleFriend: function(event) {
        // console.log(event.delegateTarget.children["0"].childNodes[1].innerText);
        var friend = event.target.innerText; // username
        console.log($(this, '.username').text());
       $('.' +  friend.replace(/[^a-zA-Z0-9 ]/g, "")).addClass('friend'); // adds class to THIS username

        // for all divs that also have this username, add class

        if (!Friends.friendList.hasOwnProperty(friend)) {
            Friends.friendList[friend] = friend;
        } else {
            delete Friends.friendList[friend];
            $(this).removeClass('friend');
        }
        // console.log(Friends.friendList);
    },

};