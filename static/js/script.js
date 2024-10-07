const reminderForm = document.getElementById('reminderForm');
const remindersList = document.getElementById('remindersList');
const alertBox = document.getElementById('alertBox');
const alertMedName = document.getElementById('alertMedName');

let reminders = JSON.parse(localStorage.getItem('reminders')) || [];

function displayReminders() {
    remindersList.innerHTML = '';
    reminders.forEach((reminder, index) => {
        const div = document.createElement('div');
        div.classList.add('reminder-item');
        div.innerHTML = `
            <span>${reminder.name} at ${reminder.time}</span>
            <button onclick="deleteReminder(${index})"><i class="fas fa-trash"></i></button>
        `;
        remindersList.appendChild(div);
    });
}

function deleteReminder(index) {
    reminders.splice(index, 1);
    localStorage.setItem('reminders', JSON.stringify(reminders));
    displayReminders();
}

reminderForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const medName = document.getElementById('medName').value.trim();
    const medTime = document.getElementById('medTime').value;
    if(medName && medTime){
        reminders.push({ name: medName, time: medTime });
        localStorage.setItem('reminders', JSON.stringify(reminders));
        displayReminders();
        reminderForm.reset();
    }
});

function checkReminders() {
    const now = moment().format('HH:mm');
    reminders.forEach(reminder => {
        if(reminder.time === now && !reminder.notified){
            showAlert(reminder.name);
            reminder.notified = true;
        }
    });
    localStorage.setItem('reminders', JSON.stringify(reminders));
}

function showAlert(medName) {
    alertMedName.textContent = medName;
    alertBox.classList.remove('hidden');
    alertBox.classList.add('visible');
}

function closeAlert() {
    alertBox.classList.add('hidden');
    alertBox.classList.remove('visible');
}

function sendSMS() {
    window.open(`sms:+1234567890?body=Time to take your medication: ${alertMedName.textContent}`, '_blank');
}

function makeCall() {
    window.open('tel:+1234567890', '_blank');
}

// Initialize
displayReminders();
setInterval(checkReminders, 60000); // Check every minute

// Add touch event listeners for better mobile responsiveness
alertBox.addEventListener('touchstart', function(e) {
    if (e.target.tagName === 'BUTTON') {
        e.target.style.backgroundColor = '#1c5980';
    }
});

alertBox.addEventListener('touchend', function(e) {
    if (e.target.tagName === 'BUTTON') {
        e.target.style.backgroundColor = '#2980b9';
    }
});
