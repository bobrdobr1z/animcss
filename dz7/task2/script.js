document.querySelector('.send-button').addEventListener('click', function() {
    const input = document.querySelector('.message-input');
    const messageText = input.value;

    if (messageText.trim() !== '') {
        addMessage(messageText, 'Пользователь 2'); 
        input.value = '';
    }
});

function addMessage(text, username) {
    const messagesContainer = document.getElementById('messages');

    const messageElement = document.createElement('div');
    messageElement.classList.add('message', 'right'); 

    const avatarElement = document.createElement('img');
    avatarElement.src = 'path/to/avatar.jpg'; 
    avatarElement.alt = "Аватар " + username; 
    avatarElement.classList.add('avatar'); 

    const messageContentElement = document.createElement('div');
    messageContentElement.classList.add('message-content');

    const usernameElement = document.createElement('span');
    usernameElement.classList.add('username');
    usernameElement.textContent = username;


    const textElement = document.createElement('p');
    textElement.textContent = text;

    const timestampElement = document.createElement('span');
    timestampElement.classList.add('timestamp');
    timestampElement.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });


    messageContentElement.appendChild(usernameElement);
    messageContentElement.appendChild(textElement);
    messageContentElement.appendChild(timestampElement);
    
    messageElement.appendChild(avatarElement);
    messageElement.appendChild(messageContentElement);

  
    messagesContainer.appendChild(messageElement);


    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}