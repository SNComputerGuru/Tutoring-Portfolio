var submit = document.getElementById("submit");
const URL = "https://lamp.ms.wits.ac.za/home/s2690851/Tutoring/client.php";

submit.addEventListener("click", function() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    const data = new URLSearchParams();
    data.append('name', name);
    data.append('email', email);
    data.append('message', message);

    fetch(URL, {
        method: 'POST',
        body: data
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        alert("Message sent successfully!");
    })
    .catch(error => {
        console.error(error);
        alert("Error sending message. Please try again later.");
    });
    })
;