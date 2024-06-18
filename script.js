let currentIndex = 0;
let previousIndex = 0;
let forwardCount = 0; 

function switchText(event) {
    if (event && event.key) {
        if (event.key === 'z' || event.key === 'Z' || event.key === 'ArrowLeft') {
            if (currentIndex > 0) {
                currentIndex = (currentIndex - 1) % texts.length; 
                forwardCount = Math.max(0, forwardCount - 1); 
            }
        } else if (event.key === 'v' || event.key === 'V' || event.key === 'ArrowRight') {
            if (forwardCount < 7 && currentIndex < texts.length - 1) {
                currentIndex = (currentIndex + 1) % texts.length; 
                forwardCount++;
            }
        }
    } else if (event && event.touches) {
        let touchX = event.touches[0].clientX;
        let screenWidth = window.innerWidth;

        if (touchX < screenWidth / 2) {
            if (currentIndex > 0) {
                currentIndex = (currentIndex - 1 + texts.length) % texts.length; 
                forwardCount = Math.max(0, forwardCount - 1); 
            }
        } else {
            if (forwardCount < 7 && currentIndex < texts.length - 1) {
                currentIndex = (currentIndex + 1) % texts.length; 
                forwardCount++;
            }
        }
    } else {
        
        if (forwardCount < 7 && currentIndex < texts.length - 1) {
            currentIndex = (currentIndex + 1) % texts.length; 
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
        
        panel.style.overflow = 'hidden'; 
        panel.innerHTML = `
            <h1>${texts[currentIndex].title}</h1>
            <div id="content">
                ${texts[currentIndex].items.map(item => `<p>${item}</p>`).join('')}
            </div>
        `;

        
        setTimeout(function() {
            panel.style.overflow = 'visible'; 
            animateText(); 
        }, 100);
    }
}

// Event Listener für Tastatureingaben
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        window.close(); // Schließt das Fenster, wenn Escape gedrückt wird
    } else {
        switchText(event); 
    }
});

// Event Listener für Touch-Ereignisse
document.addEventListener('touchstart', function(event) {
    switchText(event); 
});
function animateText() {
    let headers = document.querySelectorAll('#panel h1, #panel #content p');
    headers.forEach(header => {
    header.style.animation = 'slideFromTop 0.5s forwards';
    });
}

let texts = [
    
	{
        title: "Mein Selbstporträt...",
        items: ["...aber anders"],
		image: "image2.jpg",
		imagePosition: "left"
    },
    {
        title: "<b><u>Inhalte</u></b>",
        items: ["Grundlegendes", "Hobbys", "Interessen", "Interessen bezogen auf Kunst","Private Ziele","Ziele für die Gesellschaft"],
		image: "image2.jpg",
		imagePosition: "left"
    },
    {
        title: "<b><u>Grundlegendes</u></b>",
        items: ["<b><u>Name:</u></b> Aaron Franzmann", "<b><u>Wohnort:</u></b> Wölfersheim", "<b><u>Alter:</u></b> 17", "<b><u>Klasse:</u></b> 11"]
		
    },
    {
        title: "<b><u>Hobbys</u></b>",
        items: ["Badminton", "Programmieren", "Gaming"]
    },
	{
        title: "<b><u>Interessen</u></b>",
        items: ["<b><u>Chemie:</u></b> Ich finde es faszinierend, wie chemische Prozesse überall vorhanden sind", "<b><u>Informatik:</u></b> Ich finde es interessant, wie man selbst Programme schreiben oder Websites programmieren kann"]
    },
	{
        title: "<b><u>Interessen bezogen auf Kunst</u></b>",
        items: ["<b><u>Materialien:</u></b> Bleistift, Buntstifte, Acryl", "<b><u>Stil</u></b>: Realismus"],
		
    },
	{
        title: "<b><u>Private Ziele</u></b>",
        items: ["<b><u>Studieren:</u></b> Informatik","<b><u>Ziele:</u></b> Meinen Platz in der Gesellschaft zu finden","Ein ausgeglichenes Verhältnis zwischen Schule und Privatem finden"],
		image: "image2.jpg",
		imagePosition: "left"
    },
	{
        title: "<b><u>Ziele für die Gesellschaft</u></b>",
        items: ["Den Fokus darauf zu legen alle gleich zu behandeln", "Etwas zum Umweltschutz beitragen","Soziale Ungleichheiten bekämpfen"],
		image: "image2.jpg",
		imagePosition: "left"
    }
];


const panel = document.getElementById('panel'); 


function handleKeyDown(event) {
  if (event.key === 'z' || event.key === 'Z' || event.key === 'v' || event.key === 'V') { 
    panel.style.backgroundColor = '#e0e0e020'; 
    panel.style.border = '1px solid #cccccc'; 
	panel.style.transform = 'scale(1.05)';
  }
}


document.addEventListener('keydown', handleKeyDown);

function handleKeyUp(event) {
  if (event.key === 'z' || event.key === 'Z' || event.key === 'v' || event.key === 'V') {
    setTimeout(function() {
      panel.style.backgroundColor = '#ffffff00';
      panel.style.border = '1px solid #cccccc;';
	  panel.style.transform = 'scale(1)';
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
	panel.style.transform = 'scale(1.05)';
}

function handleTouchEnd(event) {
	setTimeout(function() {
      panel.style.backgroundColor = '#ffffff00';
      panel.style.border = '1px solid #cccccc;';
	  panel.style.transform = 'scale(1)';
    }, 100); 
}
