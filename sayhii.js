document.getElementById("contactForm").onsubmit = function(event) { // for the form
    event.preventDefault();

    var name = document.getElementById("name").value; // id is name
    var email = document.getElementById("email").value; //  id is email
    var tele = document.getElementById("tele").value; //  id is email 
    var phone = document.getElementById("phone").value; // id is phone
    var message = document.getElementById("message").value; //id is massage

    var fullMessage = `Name: ${name}\nEmail: ${email}\nTelegram: @${tele}\nPhone: ${phone}\nMessage: ${message}`;

    // Telegram API URL - Remember to replace 'YOUR_BOT_TOKEN' and 'YOUR_CHAT_ID'
    var apiUrl = `https://api.telegram.org/bot6844116065:AAH9HmqKmYOU7OG02oUdHSF0Z1tBeOicIew/sendMessage?chat_id=6411588592&text=${encodeURIComponent(fullMessage)}`;

    fetch(apiUrl, { method: 'GET' })
        .then(response => response.json())
        .then(data => {
            alert('We will revert you as soon as possible…!.Thank you for contacting us! Have a great day'); // Simple alert; customize as needed.
            modal.style.display = "none"; // Close the modal on success
            document.getElementById("contactForm").reset(); // Reset form fields
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Failed to send message.'); // Error alert
        });
};