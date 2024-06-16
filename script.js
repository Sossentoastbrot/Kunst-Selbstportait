let texts = [
    "Mein Selbstporträt, aber anders",
    "Neuer Text",
    "Noch ein Text",
    "Ein weiterer Text"
];
let currentIndex = 0;
let panel = document.getElementById('panel');

// Funktion zum Wechseln des Textes
function switchText() {
    currentIndex = (currentIndex + 1) % texts.length;
    panel.textContent = texts[currentIndex];
}

// Event Listener für Tastendruck
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        window.close(); // Schließt das Fenster, wenn Escape gedrückt wird
    } else {
        switchText(); // Wechselt den Text bei jedem anderen Tastendruck
    }
});

document.addEventListener('touchstart', function(event) {
    
    switchText(); 
});