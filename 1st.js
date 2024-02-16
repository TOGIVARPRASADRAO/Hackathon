document.getElementById('emergencyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const message = document.getElementById('message').value.trim();
    if (message !== '') {
        // In a real application, you would handle sending the emergency message here
        displayAlert('Emergency message sent successfully.', 'success');
    } else {
        displayAlert('Please enter a valid emergency message.', 'error');
    }
});

function displayAlert(message, type) {
    const alertBox = document.getElementById('alertBox');
    alertBox.textContent = message;
    alertBox.className = alert ${type};
    setTimeout(function() {
        alertBox.textContent = '';
        alertBox.className = 'alert';
    }, 3000);
}