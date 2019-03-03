var Rooms = {

$room: $('select'),
$select: $('#rooms select'),
initialize: function() {
    Rooms.$select.on('change', Rooms.getRoomName);
    }, 

getRoomName: function(event){
    console.log(event.target.selectedOptions["0"].innerText);
    var roomName = event.target.selectedOptions["0"].innerText;

    // data.results.filter(obj.roomname) 

    }
    //filterMessage:    
};

// when select class is clicked, filter messages by roomname