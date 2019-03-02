var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username <%- username.replace(/[^a-zA-Z0-9 ]/g, "") %>">
        <%- username %> 
        </div>
        <div>
        <%- text %> 
        </div>
      </div>
    `)

};