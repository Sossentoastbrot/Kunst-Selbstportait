let currentIndex = 0;
let previousIndex = 0;
let forwardCount = 0; // Zähler für vorwärts Navigation

function switchText(event) {
    if (event && event.key) {
        if (event.key === 'z' || event.key === 'Z' || event.key === 'ArrowLeft') {
            if (currentIndex > 0) {
                currentIndex = (currentIndex - 1) % texts.length; // Index für vorherigen Text berechnen
                forwardCount = Math.max(0, forwardCount - 1); // Vorwärtszähler reduzieren, aber nicht unter 0 gehen
            }
        } else if (event.key === 'v' || event.key === 'V' || event.key === 'ArrowRight') {
            if (forwardCount < 5 && currentIndex < texts.length - 1) {
                currentIndex = (currentIndex + 1) % texts.length; // Index für nächsten Text berechnen
                forwardCount++;
            }
        }
    } else if (event && event.touches) {
        let touchX = event.touches[0].clientX;
        let screenWidth = window.innerWidth;

        if (touchX < screenWidth / 2) {
            if (currentIndex > 0) {
                currentIndex = (currentIndex - 1 + texts.length) % texts.length; // Index für vorherigen Text berechnen
                forwardCount = Math.max(0, forwardCount - 1); // Vorwärtszähler reduzieren, aber nicht unter 0 gehen
            }
        } else {
            if (forwardCount < 5 && currentIndex < texts.length - 1) {
                currentIndex = (currentIndex + 1) % texts.length; // Index für nächsten Text berechnen
                forwardCount++;
            }
        }
    } else {
        // Fallback für den Fall, dass kein Event übergeben wurde (z. B. beim automatischen Wechsel)
        if (forwardCount < 5 && currentIndex < texts.length - 1) {
            currentIndex = (currentIndex + 1) % texts.length; // Index für nächsten Text berechnen
            forwardCount++;
        }
    }

    // Überprüfen, ob currentIndex das letzte Element ist
    if (currentIndex === texts.length - 1) {
        // Letzten Text anzeigen und Touch-Event entfernen
        panel.style.overflow = 'hidden'; // Overflow auf 'hidden' setzen, um Texte auszublenden
        panel.innerHTML = `
            <h1>${texts[currentIndex].title}</h1>
            <div id="content">
                ${texts[currentIndex].items.map(item => `<p>${item}</p>`).join('')}
            </div>
        `;
        document.removeEventListener('touchstart', switchText);
    } else {
        // Animation vor dem Einsetzen der neuen Inhalte starten
        panel.style.overflow = 'hidden'; // Overflow auf 'hidden' setzen, um Texte auszublenden
        panel.innerHTML = `
            <h1>${texts[currentIndex].title}</h1>
            <div id="content">
                ${texts[currentIndex].items.map(item => `<p>${item}</p>`).join('')}
            </div>
        `;

        // Timeout verwenden, um die Animation nach dem Einsetzen der Inhalte zu starten
        setTimeout(function() {
            panel.style.overflow = 'visible'; // Overflow wieder auf 'visible' setzen
            animateText(); // Funktion aufrufen, um Animation zu starten
        }, 100);
    }
}

// Event Listener für Tastatureingaben
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        window.close(); // Schließt das Fenster, wenn Escape gedrückt wird
    } else {
        switchText(event); // Übergeben des Event-Objekts an switchText-Funktion
    }
});

// Event Listener für Touch-Ereignisse
document.addEventListener('touchstart', function(event) {
    switchText(event); // Übergeben des Event-Objekts an switchText-Funktion
});
function animateText() {
    let headers = document.querySelectorAll('#panel h1, #panel #content p');
    headers.forEach(header => {
        header.style.animation = 'slideFromTop 0.5s forwards';
    });
}

let texts = [
    
	{
        title: "Mein Selbstportät...",
        items: ["...aber anders"],
		image: "image2.jpg",
		imagePosition: "left"
    },
    {
        title: "<u>Inhalte</u>",
        items: ["Grundlegendes", "Hobbys", "Interessen", "Interessen bezogen auf Kunst"],
		image: "image2.jpg",
		imagePosition: "left"
    },
    {
        title: "<u>Grundlegendes</u>",
        items: ["Name: Aaron Franzmann", "Wohnort: Wölfersheim", "Alter: 17", "Klasse: 11"]
		
    },
    {
        title: "<u>Hobbys</u>",
        items: ["Badminton", "Programmieren", "Gaming"]
    },
	{
        title: "<u>Interessen</u>",
        items: ["Chemie", "Mathe", "Informatik"]
    },
	{
        title: "<u>Interessen bezogen auf Kunst</u>",
        items: ["Materialien: Bleistift, Buntstifte, Acryl", "Stil: Realismus"],
		image: "image.jpg",
		imagePosition: "right" 
    }
];


const panel = document.getElementById('panel'); 


function handleKeyDown(event) {
  if (event.key === 'z' || event.key === 'Z' || event.key === 'v' || event.key === 'V') { 
    panel.style.backgroundColor = '#e0e0e020'; 
    panel.style.border = '1px solid #cccccc'; 
  }
}


document.addEventListener('keydown', handleKeyDown);

function handleKeyUp(event) {
  if (event.key === 'z' || event.key === 'Z' || event.key === 'v' || event.key === 'V') {
    setTimeout(function() {
      panel.style.backgroundColor = '#ffffff00';
      panel.style.border = '1px solid #cccccc;';
    }, 100); 
  }
}


// Event Listener für das Tastaturereignis "keyup"
document.addEventListener('keyup', handleKeyUp);

document.addEventListener('touchstart', handleTouchStart);
document.addEventListener('touchend', handleTouchEnd);

function handleTouchStart(event) {
	panel.style.backgroundColor = '#e0e0e020'; 
    panel.style.border = '1px solid #cccccc';
	setTimeout(function() {
      panel.style.backgroundColor = '#ffffff00';
      panel.style.border = '1px solid #cccccc;';
    }, 100); 
}


