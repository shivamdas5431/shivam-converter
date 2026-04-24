// script.js - THE CYBER LOGIC V14

// 1. Live Clock
setInterval(() => {
    document.getElementById('live-clock').innerText = new Date().toLocaleTimeString();
}, 1000);

// 2. Helicopter Switches Logic
function toggleSystem() {
    document.getElementById('main-toggle').classList.toggle('active');
    let status = document.getElementById('main-toggle').classList.contains('active') ? "AUTO" : "MANUAL";
    document.getElementById('sys-log').innerText = "> MODE CHANGED TO: " + status;
}

// 3. Scanner Modal Logic
function openScanner() {
    document.getElementById('scanner-modal').style.display = "block";
}

function closeScanner() {
    document.getElementById('scanner-modal').style.display = "none";
}

// 4. Basic Box Clear Function
function clearBox(id) {
    document.getElementById(id).value = "";
    document.getElementById('sys-log').innerText = "> BUFFER CLEARED: " + id.toUpperCase();
}

// 5. Copy Function
function copy(id) {
    let text = document.getElementById(id).value;
    navigator.clipboard.writeText(text);
    document.getElementById('sys-log').innerText = "> COPIED TO CLIPBOARD: " + id.toUpperCase();
}

// 6. Progress Bar Animation
window.onload = () => {
    document.getElementById('blue-strip').style.width = "100%";
    setTimeout(() => {
        document.getElementById('blue-strip').style.width = "30%";
    }, 1000);
};
