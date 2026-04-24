/* ====================================================================================================
    SHIVAM CYBER-CORE PRO V14 | MASTER EXECUTABLE SYSTEM [DEEP-CORE]
    ADMINISTRATOR: MASTER SHIVAM (PUSA, SAMASTIPUR, BIHAR)
    SYSTEM ARCHITECTURE: MODULAR MULTI-AI COORDINATION
    TOTAL DEPTH: LEVEL_9_ALPHA_STABLE
====================================================================================================
*/

"use strict";

/**
 * [01] GLOBAL SYSTEM CONFIGURATION & TELEMETRY
 * Tracking every movement of the UI and Backend state.
 */
class CyberSystem {
    constructor() {
        this.version = "14.0.22-ULTRA";
        this.admin = "SHIVAM";
        this.sessionID = "SC-" + Math.floor(Math.random() * 999999);
        this.bootTime = new Date().toISOString();
        this.state = {
            isVaultOpen: false,
            isManualMode: false,
            isStealthActive: false,
            encryptionLevel: 512,
            activeNodes: ["AI-1", "AI-2", "AI-3", "AI-4"]
        };
        this.logs = [];
        this.init();
    }

    init() {
        console.log(`%c [BOOT]: SHIVAM-CORE ${this.version} INITIALIZED `, "background: #00f3ff; color: #000;");
        this.updateLog("System Boot Sequence Complete. All Nodes Online.");
    }

    updateLog(msg) {
        const ticker = document.getElementById('activity-log');
        const timestamp = new Date().toLocaleTimeString();
        const fullMsg = `[${timestamp}] [LOG]: ${msg} | ADMIN: ${this.admin}`;
        this.logs.push(fullMsg);
        if (ticker) ticker.innerText = fullMsg;
        if (this.logs.length > 100) this.logs.shift(); // Memory optimization
    }
}

const Core = new CyberSystem();

/**
 * [02] MATRIX CONVERSION ENGINE
 * Handles real-time Text to Binary, Hex, and Octal with Progress Simulation.
 */
const MatrixEngine = {
    process: function() {
        if (Core.state.isManualMode) return;

        const input = document.getElementById('txt').value;
        if (!input) {
            this.clearAll();
            return;
        }

        try {
            this.generateBinary(input);
            this.generateHex(input);
            this.generateOctal(input);
            Core.updateLog(`Matrix Vectorization: ${input.length} characters processed.`);
        } catch (err) {
            Core.updateLog(`CRITICAL ERROR: Matrix Desync - ${err.message}`);
        }
    },

    generateBinary: function(data) {
        const bin = data.split('').map(c => c.charCodeAt(0).toString(2).padStart(8, '0')).join(' ');
        document.getElementById('bin').value = bin;
        this.animateBar('p-bin', 100);
    },

    generateHex: function(data) {
        const hex = data.split('').map(c => c.charCodeAt(0).toString(16).toUpperCase().padStart(2, '0')).join(' ');
        document.getElementById('hex').value = hex;
        this.animateBar('p-hex', 100);
    },

    generateOctal: function(data) {
        const oct = data.split('').map(c => c.charCodeAt(0).toString(8).padStart(3, '0')).join(' ');
        document.getElementById('oct').value = oct;
        this.animateBar('p-oct', 100);
    },

    animateBar: function(id, val) {
        const el = document.getElementById(id);
        if (el) el.style.width = val + "%";
    },

    clearAll: function() {
        ['bin', 'hex', 'oct'].forEach(id => document.getElementById(id).value = "");
        ['p-bin', 'p-hex', 'p-oct'].forEach(id => this.animateBar(id, 0));
    }
};

/**
 * [03] HARDWARE EMULATION LOGIC (HELICOPTER SWITCHES)
 * Real-time flip detection and circuit simulation.
 */
const Hardware = {
    flip: function(type) {
        const switches = {
            manual: { id: 'lv-man', lamp: 'lp-man', state: 'isManualMode' },
            auto: { id: 'lv-auto', lamp: 'lp-auto', state: null }, // Auto is opposite of manual
            stealth: { id: 'lv-stealth', lamp: 'lp-stealth', state: 'isStealthActive' }
        };

        const target = switches[type];
        Core.updateLog(`Hardware Interaction Detected: ${type.toUpperCase()}_SWITCH`);

        if (type === 'manual') {
            Core.state.isManualMode = true;
            this.updateUI('lv-man', 'lp-man', true);
            this.updateUI('lv-auto', 'lp-auto', false);
            Core.updateLog("AI Automation Terminated. Manual Entry Required.");
        } else if (type === 'auto') {
            Core.state.isManualMode = false;
            this.updateUI('lv-auto', 'lp-auto', true);
            this.updateUI('lv-man', 'lp-man', false);
            Core.updateLog("AI Overlord Re-engaged. Real-time Analysis Active.");
            MatrixEngine.process();
        } else if (type === 'stealth') {
            Core.state.isStealthActive = !Core.state.isStealthActive;
            this.updateUI('lv-stealth', 'lp-stealth', Core.state.isStealthActive);
            Core.updateLog(`Stealth Protocol: ${Core.state.isStealthActive ? 'ACTIVATED' : 'DEACTIVATED'}`);
        }
    },

    updateUI: function(lvId, lpId, isActive) {
        const lv = document.getElementById(lvId);
        const lp = document.getElementById(lpId);
        if (isActive) {
            lv.classList.add('active');
            lp.classList.add('active');
            lp.innerText = "ENGAGED";
        } else {
            lv.classList.remove('active');
            lp.classList.remove('active');
            lp.innerText = "DISCON";
        }
    }
};

/**
 * [04] MULTI-AI VOICE & TEXT COORDINATION
 * Logic for AI-1 to AI-4 integration.
 */
const AI_Coordination = {
    speak: function(aiNode) {
        const prompts = {
            "ai1": "Master Shivam, AI-1 Dashboard is ready for command.",
            "ai2": "System Manager AI-2: All history buffers are clear.",
            "ai3": "Designer AI-3: Carrier shape vectorization successful.",
            "ai4": "Guardian AI-4: Vault security standing by."
        };
        alert(`[VOICE_EMULATION]: ${prompts[aiNode]}`);
        Core.updateLog(`${aiNode.toUpperCase()} Mic Activated.`);
    },

    processCommand: function(nodeId, inputId) {
        const cmd = document.getElementById(inputId).value;
        if (!cmd) return;
        
        Core.updateLog(`${nodeId.toUpperCase()} Processing: ${cmd}`);
        // Deep Logic for specific commands can be added here
        if (cmd.includes("vault")) Hardware.flip('auto');
    }
};

/**
 * [05] VAULT SECURITY & BIOMETRIC AUTH
 * 4-Step verification and Secure Modal management.
 */
const VaultSecurity = {
    init: function() {
        Core.updateLog("Biometric Scan Initialized. Laser Ready.");
        setTimeout(() => {
            const auth = prompt("MASTER IDENTITY VERIFICATION. Enter 4-Digit PIN:");
            if (auth === "2026") {
                Core.state.isVaultOpen = true;
                document.getElementById('vault-modal').style.display = "block";
                Core.updateLog("Biometric Match Confirmed. Welcome Master Shivam.");
            } else {
                Core.updateLog("WARNING: AUTHENTICATION FAILURE.");
                alert("ACCESS DENIED!");
            }
        }, 1000);
    },

    close: function() {
        Core.state.isVaultOpen = false;
        document.getElementById('vault-modal').style.display = "none";
        Core.updateLog("Vault Sealed. All temporary buffers wiped.");
    }
};

/**
 * [06] GLOBAL REVISION TRACKER
 * Automatic 4-minute history cleanup as per Administrative Requirement.
 */
setInterval(() => {
    Core.updateLog("Executing 4-Minute Revision Buffer Cleanup...");
    MatrixEngine.clearAll();
    document.getElementById('txt').value = "";
    Core.updateLog("Buffer Cleared. Privacy Preserved.");
}, 240000); // 240,000ms = 4 minutes

/**
 * [07] EVENT BINDING & INTERFACE LISTENERS
 */
document.getElementById('txt').addEventListener('input', () => MatrixEngine.process());

window.toggleManager = () => {
    document.getElementById('side-drawer').classList.toggle('active');
    Core.updateLog("AI-2 Manager Panel Toggled.");
};

// Global Exposure for HTML Buttons
window.flipHardware = (t) => Hardware.flip(t);
window.startBiometric = () => VaultSecurity.init();
window.closeVault = () => VaultSecurity.close();
window.activateMic = (n) => AI_Coordination.speak(n);

/**
 * FINAL SYSTEM CHECK
 */
window.onload = () => {
    Core.updateLog("Shivam Cyber-Core V14: All Systems Nominal.");
};

