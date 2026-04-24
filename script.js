/* ====================================================================================================
    SHIVAM CYBER-CORE PRO V14 | MASTER_ADMIN_LOGIC_ENGINE
    SUPREME ADMIN: ashok91208@gmail.com
    FEATURES: GOD_MODE_BYPASS, UNICODE_CONVERTER, SCROLL_SYNC, AI_COORDINATION
    BUILD: 14.0.88 [EXTREME_DENSITY]
==================================================================================================== */

"use strict";

/**
 * [01] SYSTEM CONFIGURATION & GLOBAL STATE
 */
const MASTER_ADMIN_EMAIL = "ashok91208@gmail.com";

class CyberCore {
    constructor() {
        this.version = "14.0.88-PRO";
        this.currentUser = null;
        this.isAdmin = false;
        this.isVaultOpen = false;
        this.scrollSync = true;
        this.gapMode = true; // Auto Gap between codes
        this.history = JSON.parse(localStorage.getItem('cyber_history')) || [];
        this.init();
    }

    init() {
        console.log(`%c [BOOT]: SHIVAM-CORE ${this.version} INITIALIZED `, "background: #00f3ff; color: #000;");
        this.setupEventListeners();
        this.checkExistingSession();
    }

    updateLog(msg) {
        const logger = document.getElementById('activity-log');
        const timestamp = new Date().toLocaleTimeString();
        if (logger) logger.innerText = `[${timestamp}] [NODE_01]: ${msg}`;
    }
}

const Core = new CyberCore();

/**
 * [02] SECURITY GATE & GOD-MODE BYPASS
 * One-time login logic (Session validity: 1 Year)
 */
function handleGoogleLogin() {
    // Simulating Google Auth Protocol
    const mockEmail = prompt("ENTER_AUTHORIZED_GOOGLE_EMAIL:");
    
    if (mockEmail) {
        Core.currentUser = mockEmail;
        localStorage.setItem('cyber_session', JSON.stringify({
            email: mockEmail,
            expiry: Date.now() + (365 * 24 * 60 * 60 * 1000) // 1 Year
        }));
        
        verifyAccess(mockEmail);
    }
}

function verifyAccess(email) {
    const authGate = document.getElementById('auth-gate');
    const dashboard = document.getElementById('main-dashboard');
    const adminLvl = document.getElementById('admin-lvl');

    if (email === MASTER_ADMIN_EMAIL) {
        Core.isAdmin = true;
        adminLvl.innerText = "SUPREME_ADMIN (GOD_MODE)";
        adminLvl.classList.add('god-mode-label');
        Core.updateLog("God Mode Detected. Bypassing all security layers...");
    } else {
        Core.isAdmin = false;
        adminLvl.innerText = "VERIFIED_USER";
        Core.updateLog(`User ${email} verified. Standard access granted.`);
    }

    // Unlocking Dashboard (Removing the Invisible Parda)
    authGate.classList.add('fade-out');
    setTimeout(() => {
        authGate.style.display = 'none';
        dashboard.classList.remove('hidden-system');
        dashboard.classList.add('fade-in');
    }, 500);
}

function checkExistingSession() {
    const session = JSON.parse(localStorage.getItem('cyber_session'));
    if (session && session.expiry > Date.now()) {
        verifyAccess(session.email);
    }
}

/**
 * [03] THE CONVERSION MATRIX (HINDI, SYMBOLS & UNICODE)
 * Industrial Logic for 4-Box Interaction
 */
const Converter = {
    // Text to everything
    fromText: function(val) {
        if (!val) return this.clearAll();
        
        // 1. To Binary
        const bin = Array.from(val).map(char => 
            char.charCodeAt(0).toString(2).padStart(8, '0')
        ).join(Core.gapMode ? ' ' : '');
        document.getElementById('bin').value = bin;

        // 2. To Hex
        const hex = Array.from(val).map(char => 
            char.charCodeAt(0).toString(16).toUpperCase().padStart(2, '0')
        ).join(Core.gapMode ? ' ' : '');
        document.getElementById('hex').value = hex;

        // 3. To Octal
        const oct = Array.from(val).map(char => 
            char.charCodeAt(0).toString(8).padStart(3, '0')
        ).join(Core.gapMode ? ' ' : '');
        document.getElementById('oct').value = oct;

        this.updateBars(100);
        this.updateStats(val);
    },

    updateBars: function(p) {
        ['bin', 'hex', 'oct'].forEach(id => {
            document.getElementById(`fill-${id}`).style.width = p + "%";
        });
    },

    updateStats: function(val) {
        document.getElementById('char-count').innerText = `CHARS: ${val.length}`;
    },

    clearAll: function() {
        ['txt', 'bin', 'hex', 'oct'].forEach(id => document.getElementById(id).value = "");
        this.updateBars(0);
        this.updateStats("");
    }
};

/**
 * [04] SCROLL SYNC & UI CONTROLS
 */
const UI = {
    syncScroll: function(e) {
        if (!Core.scrollSync) return;
        const boxes = ['txt', 'bin', 'hex', 'oct'];
        const top = e.target.scrollTop;
        boxes.forEach(id => {
            const el = document.getElementById(id);
            if (el !== e.target) el.scrollTop = top;
        });
    },

    toggleSetting: function(type) {
        const btn = document.getElementById(`sw-${type}`);
        if (type === 'sync') {
            Core.scrollSync = !Core.scrollSync;
            btn.innerText = Core.scrollSync ? "AUTO" : "MANUAL";
        } else if (type === 'gap') {
            Core.gapMode = !Core.gapMode;
            btn.innerText = Core.gapMode ? "AUTO" : "MANUAL";
            Converter.fromText(document.getElementById('txt').value); // Re-process
        }
        Core.updateLog(`System Setting Changed: ${type.toUpperCase()}`);
    }
};

/**
 * [05] VAULT & SECRET WORLD LOGIC
 */
function openVault() {
    const modal = document.getElementById('vault-modal');
    modal.classList.remove('hidden-system');
    Core.updateLog("Secret World Access Point Triggered.");
    
    // GOD MODE BYPASS
    if (Core.isAdmin) {
        document.getElementById('vault-lock-screen').style.display = 'none';
        document.getElementById('vault-content').classList.remove('hidden-system');
        Core.updateLog("Admin ID recognized. Vault door opened without key.");
    }
}

function verifyVault() {
    const pass = document.getElementById('vault-master-pass').value;
    if (pass === "2026") {
        document.getElementById('vault-lock-screen').style.display = 'none';
        document.getElementById('vault-content').classList.remove('hidden-system');
        Core.updateLog("Authentication Successful. Guardian AI standing down.");
    } else {
        alert("ACCESS_DENIED: INCORRECT MASTER_KEY");
        Core.updateLog("WARNING: Intruder attempt at Vault Gate.");
    }
}

function closeVault() {
    document.getElementById('vault-modal').classList.add('hidden-system');
    Core.updateLog("Vault Sealed. All buffers wiped.");
}

/**
 * [06] DATA EXPORT (.TXT & SPECIAL CODE)
 */
function saveAsTxt() {
    const txt = document.getElementById('txt').value;
    const bin = document.getElementById('bin').value;
    const hex = document.getElementById('hex').value;
    const time = new Date().toLocaleString();
    const uniqueID = "SC-" + Math.floor(Math.random() * 999999);

    const content = `
SHIVAM CYBER-CORE REPORT
-------------------------
TIME: ${time}
ID: ${uniqueID}
ADMIN: ${MASTER_ADMIN_EMAIL}

SOURCE TEXT: ${txt}
BINARY BITSTREAM: ${bin}
HEXADECIMAL: ${hex}

[END_OF_SECURE_REPORT]
    `;

    const blob = new Blob([content], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `CyberCore_${uniqueID}.txt`;
    link.click();
    Core.updateLog(`Report Exported: ${uniqueID}.txt saved.`);
}

/**
 * [07] EVENT BINDERS
 */
CyberCore.prototype.setupEventListeners = function() {
    // Auth
    document.getElementById('google-login-btn').addEventListener('click', handleGoogleLogin);
    
    // Real-time Conversion
    document.getElementById('txt').addEventListener('input', (e) => Converter.fromText(e.target.value));

    // Scroll Sync
    ['txt', 'bin', 'hex', 'oct'].forEach(id => {
        document.getElementById(id).addEventListener('scroll', UI.syncScroll);
    });

    // Settings
    document.getElementById('sw-sync').addEventListener('click', () => UI.toggleSetting('sync'));
    document.getElementById('sw-gap').addEventListener('click', () => UI.toggleSetting('gap'));
};

function openManager() {
    document.getElementById('side-drawer').classList.toggle('active');
}

/**
 * FINAL BOOT CHECK
 */
window.onload = () => {
    Core.updateLog("Shivam Cyber-Core V14 Systems Nominal.");
};
