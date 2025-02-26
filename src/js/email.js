let loading = false
const BUTTON = document.getElementById('formSubmit')

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault()
    BUTTON.textContent = 'Loading...'

    let name = document.querySelector('input[placeholder="Name"]').value.trim()
    let email = document.querySelector('input[placeholder="E-mail"]').value.trim()
    let subject = document.querySelector('input[placeholder="Subject"]').value.trim()
    let message = document.querySelector('textarea').value.trim()

    if (!name || !email || !subject || !message) {
        alert("Please fill in all fields.")
        BUTTON.textContent = "Send"
        return
    }

    let data = {
        service_id: 'service_qu8irua',        // Outlook service
        template_id: 'template_4fqhcuh',      // 2nd template
        user_id: 'wtCRfUdNsnRwRkqjy',         // Public key
        template_params: {
            user_name: name,
            user_email: email,
            subject: subject,
            message: message
        }
    }

    fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        BUTTON.textContent = 'Sent!'
        setTimeout(() => {
            BUTTON.textContent = "Send"
        }, 5000)
        if (response.ok) {
            document.getElementById('contactForm').reset()
            alert('Your mail has been sent successfully!')
        } else {
            return response.json().then(err => { 
                throw err })
        }
    })
    .catch(error => {
        alert('Something went wrong: ' + JSON.stringify(error))
    })
})
