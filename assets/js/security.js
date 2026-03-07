/**
 * PRANJAL TRIVEDI - ELITE KERNEL SECURITY
 * INTERCEPTOR & VISUAL LOCKDOWN
 */

const IS_MAINTENANCE_MODE = false; 

(function() {
    const isBot = /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent);
    if (isBot) return;

    // --- THE SCARY TAKEOVER ENGINE ---
    const executeVisualLockdown = (reason) => {
        // 1. Trigger the short, scary alert
        alert("🚨 SECURITY LOCKDOWN INITIATED 🚨\n\nSuspicious Activity Detected: " + reason + "\nIP Address Logged\nDevice Fingerprint Captured\n\nFurther attempts will result in permanent access ban.");
        // 2. Flood the console with the aggressive layout
        for (let i = 0; i < 50; i++) {
            console.clear();
            console.log("%c  ⚠️ SYSTEM BREACH DETECTED ⚠️  ", "background: red; color: white; font-size: 35px; font-weight: bold; border: 10px solid black;");
            console.log("%cCRITICAL: Unauthorized access to ROOT_KERNEL detected.", "color: red; font-size: 20px; font-weight: bold;");
            console.log("%c[!] TRACING_IP_ADDRESS... 100%", "color: #00ff00; background: black; font-size: 18px; font-family: monospace;");
            console.log("%c[!] CAPTURING_GEOLOCATION... DONE", "color: #00ff00; background: black; font-size: 18px; font-family: monospace;");
            console.log("%c[!] UPLOADING_FINGERPRINT... SUCCESS", "color: #00ff00; background: black; font-size: 18px; font-family: monospace;");
            console.log("%cTERMINATE ALL ACTIONS IMMEDIATELY OR FACE LEGAL LOCKOUT.", "color: white; background: red; font-size: 15px; font-weight: bold;");
        }
    };

    // 1. INTERCEPT INSPECT ELEMENT (Keys)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && ['I','J','C'].includes(e.key)) || (e.ctrlKey && ['U','S'].includes(e.key))) {
            e.preventDefault();
            executeVisualLockdown("Kernel Decryption Attempt");
        }
    });

    // 2. INTERCEPT RIGHT CLICK
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        executeVisualLockdown("Unauthorized Menu Access");
    });

    // 3. INTERCEPT COPYING
    document.addEventListener('copy', (e) => {
        e.preventDefault();
        executeVisualLockdown("Data Scraping Violation");
    });

    // 4. INTERCEPT IMAGE DRAGGING
    document.addEventListener('dragstart', (e) => {
        if (e.target.nodeName === 'IMG') {
            e.preventDefault();
            executeVisualLockdown("Asset Extraction Theft");
        }
    });

    // 5. MAINTENANCE OVERLAY
    if (IS_MAINTENANCE_MODE) {
        document.documentElement.style.overflow = 'hidden';
        window.addEventListener('DOMContentLoaded', () => {
            const overlay = document.getElementById('maintenanceOverlay');
            if (overlay) {
                overlay.style.display = 'flex';
                document.body.classList.add('maintenance-active');
            }
        });
    }
})();