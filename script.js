let remindSumbit = document.querySelector('remind-submit');
const leftButton = document.querySelector('.leftbutton'); 
const rightButton = document.querySelector('.rightbutton');
const submitButton = document.querySelector('.submit');
let counter = document.querySelector('#counter')
const addAssignment = document.querySelector('.add-assignment')
const title = document.querySelector('.title')
let reminder = document.querySelector('.reminder')
let reminders = ['walk the goldfish :)', 'go to swim practice', 'get my christmas tree', 'friend sleepover', 'do AP Comp Sci Assignment']
let currentIndex = -1; 

document.querySelector('.submit').addEventListener('click', function() {
    let reminderText = document.querySelector('.add-assignment').value;
    reminders.push(reminderText);
    console.log(reminders);
    let newReminder = document.createElement('div');
    newReminder.className = 'reminder';
    newReminder.innerHTML = `<h3>${reminderText}</h3>`;
    document.querySelector('reminder-input').value = "";
});

function updateReminder() {
    reminder.innerHTML = `<h3>${reminders[currentIndex]}</h3>`;
}

leftButton.addEventListener('click', function() { 
    if (currentIndex > 0) {
        currentIndex--;
        updateReminder();
        updateCounter();
    }
});

rightButton.addEventListener('click', function() { 
    if (currentIndex < reminders.length - 1) {
        currentIndex++;
        updateReminder();
        updateCounter();
    }
});

function updateCounter() {
    const counter = document.getElementById('counter');
    counter.innerText = currentIndex + 1;
    counter.classList.remove('animate');
    void counter.offsetWidth; 
    counter.classList.add('animate');
}