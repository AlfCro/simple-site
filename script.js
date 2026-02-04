document.getElementById('greeting-btn').addEventListener('click', function() {
    const messages = [
        'Hello there!',
        'Nice to meet you!',
        'Have a great day!',
        'Welcome aboard!',
        'Thanks for clicking!'
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById('message').textContent = randomMessage;
});
