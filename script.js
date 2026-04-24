// script.js - SHIVAM CYBER-CORE PRO V14

// 1. MENU TOGGLE (3-DOT SYSTEM)
function toggleMenu() {
    document.getElementById('side-menu').classList.toggle('active');
}

// 2. VAULT ENTRY (THUMB SCANNER LOGIC)
function openVault() {
    const modal = document.getElementById('vault-modal');
    modal.style.display = "block";
    
    // First time setup logic
    const authBox = document.getElementById('auth-inputs');
    if (!localStorage.getItem('cyberPass')) {
        authBox.innerHTML = `
            <p style="color:var(--cyber-blue)">First time detected. Set your Secret Key?</p>
            <input type="password" id="new-pass" placeholder="Set Key">
            <button onclick="setInitialPass()">SET & ENTER</button>
            <button onclick="skipPass()">SKIP (DIRECT ENTRY)</button>
        `;
    } else {
        authBox.innerHTML = `
            <input type="password" id="login-pass" placeholder="Enter Key">
            <button onclick="verifyPass()">ACCESS</button>
        `;
    }
}

function closeVault() {
    document.getElementById('vault-modal').style.display = "none";
}

// 3. MASTER CONVERSION (TEXT TO ALL)
document.getElementById('txt').addEventListener('input', function(e) {
    const val = e.target.value;
    if(!val) {
        document.getElementById('bin').value = "";
        document.getElementById('hex').value = "";
        document.getElementById('oct').value = "";
        return;
    }
    
    // Binary (8-bit)
    document.getElementById('bin').value = val.split('').map(c => c.charCodeAt(0).toString(2).padStart(8, '0')).join(' ');
    // Hex
    document.getElementById('hex').value = val.split('').map(c => c.charCodeAt(0).toString(16).toUpperCase()).join(' ');
    // Octal
    document.getElementById('oct').value = val.split('').map(c => c.charCodeAt(0).toString(8)).join(' ');
});

// 4. SYNC SCROLL LOGIC
function toggleScroll() {
    document.getElementById('scroll-sw').classList.toggle('active');
}

const boxes = ['txt', 'bin', 'hex', 'oct'];
boxes.forEach(id => {
    document.getElementById(id).addEventListener('scroll', function() {
        if(document.getElementById('scroll-sw').classList.contains('active')) {
            boxes.forEach(otherId => {
                document.getElementById(otherId).scrollTop = this.scrollTop;
            });
        }
    });
});

// 5. PASSWORD UTILS (SET/VERIFY)
function setInitialPass() {
    const p = document.getElementById('new-pass').value;
    if(p) localStorage.setItem('cyberPass', p);
    showTools();
}

function skipPass() { showTools(); }

function showTools() {
    document.getElementById('vault-auth').style.display = "none";
    document.getElementById('vault-tools').style.display = "block";
}
