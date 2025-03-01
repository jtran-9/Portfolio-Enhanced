document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
});

function validateFields() {
    document.getElementById('error').style.display = "none";
    document.getElementById('info').style.display = "none";
    document.getElementById('error').textContent = "";
    document.getElementById('info').textContent = "";
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('comments').value.trim();
  
    if (!name || !email) {
        document.getElementById('error').style.display = "block";
        document.getElementById('error').textContent = "All fields are required!";
        return;
    }
  
    const formData = {
        name: name,
        email: email,
        message: message
    };
  
    fetch('https://httpbin.org/post', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
        'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        clearFields();
        document.getElementById('info').style.display = "block";
        document.getElementById('info').textContent = "Form submitted successfully!";
    })
    .catch(error => {
        document.getElementById('error').style.display = "block";
        document.getElementById('error').textContent = "Submission failed. Please try again.";
    });
}

function clearFields() {
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('comments').value = "";
}