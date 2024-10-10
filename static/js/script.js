const reminderForm = document.getElementById('reminderForm');
const remindersList = document.getElementById('remindersList');
const alertBox = document.getElementById('alertBox');
const alertMedName = document.getElementById('alertMedName');

let reminders = JSON.parse(localStorage.getItem('reminders')) || [];
let initialLoad = true;

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
        if (reminder.time === now && !reminder.notified) {
            if (!initialLoad) {
                showAlert(reminder.name);
            }
            reminder.notified = true;
        }
    });
    localStorage.setItem('reminders', JSON.stringify(reminders));
}

function showAlert(medName) {
    if (!initialLoad) {
        alertMedName.textContent = medName;
        alertBox.style.display = 'block';
        alertBox.classList.remove('hidden');
        alertBox.classList.add('visible');
        addDismissListeners();
    }
}

function closeAlert() {
    console.log('closeAlert function called');
    alertBox.classList.remove('visible');
    alertBox.classList.add('hidden');
    console.log('Alert box classes after close:', alertBox.classList);
    
    // Remove the alert box from the DOM after a short delay
    setTimeout(() => {
        alertBox.style.display = 'none';
    }, 500);
}

function addDismissListeners() {
    const dismissButton = document.querySelector('#dismissButton');
    dismissButton.removeEventListener('click', closeAlert);
    dismissButton.removeEventListener('touchend', closeAlert);
    
    dismissButton.addEventListener('click', function(e) {
        e.preventDefault();
        closeAlert();
    });
    
    dismissButton.addEventListener('touchend', function(e) {
        e.preventDefault();
        closeAlert();
    });
}

// Initialize
displayReminders();

// Add a delay before starting the reminder checks
setTimeout(() => {
    initialLoad = false;
    setInterval(checkReminders, 60000); // Check every minute
}, 2000); // 2-second delay

// Call this function when the page loads
document.addEventListener('DOMContentLoaded', function() {
    addDismissListeners();
});
