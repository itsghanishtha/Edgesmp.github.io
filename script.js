let nameSet = false; // Variable to track if the name has been set

function sendMessage() {
  // Get message and name inputs
  const messageInput = document.getElementById('message-input');
  const nameInput = document.getElementById('name-input');

  // Trim message
  const message = messageInput.value.trim();
  const name = nameInput.value.trim();

  // Check if message and name are not empty
  if (message !== '' && name !== '') {
    // Get chat messages container
    const chatMessages = document.querySelector('.chat-messages');

    // Create message element
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');

    // Create and append name element
    const nameElement = document.createElement('div');
    nameElement.classList.add('name');
    nameElement.textContent = name + ': ';
    messageElement.appendChild(nameElement);

    // Create and append message content
    const messageContentElement = document.createElement('div');
    messageContentElement.textContent = message;
    messageElement.appendChild(messageContentElement);

    // Append message element to chat messages
    chatMessages.appendChild(messageElement);

    // Clear message input
    messageInput.value = '';

    // Scroll to bottom of chat messages
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Disable name input if name has been set
    if (!nameSet) {
      nameInput.disabled = true;
      nameSet = true;
    }
  }
}

// Event listener for sending message
document.getElementById('send-button').addEventListener('click', sendMessage);

// Event listener for "Enter" key press
document.getElementById('message-input').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    sendMessage();
  }
});
