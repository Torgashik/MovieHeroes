function submitComment() {
    var username = document.getElementById('username').value;
    var comment = document.getElementById('comment').value;

    var messageDiv = document.createElement('div');
    messageDiv.className = 'message';

    var usernameDiv = document.createElement('div');
    usernameDiv.className = 'username';
    usernameDiv.innerText = username;

    var contentDiv = document.createElement('div');
    contentDiv.className = 'content';
    contentDiv.innerText = comment;

    messageDiv.appendChild(usernameDiv);
    messageDiv.appendChild(contentDiv);

    var messagesDiv = document.querySelector('.messages');
    messagesDiv.appendChild(messageDiv);

    document.getElementById('comment').value = '';
}