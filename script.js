let texts = [
    {
        title: "Interessen bezogen auf Kunst",
        items: ["Materialien: Bleistift, Buntstifte, Acryl", "Stil: Realismus"],
		image: "image.jpg",
		imagePosition: "right" 
    },
    {
        title: "Inhalte",
        items: ["Grundlegendes", "Hobbys", "Interessen", "Interessen bezogen auf Kunst"],
		image: "image2.jpg",
		imagePosition: "left"
    },
    {
        title: "Grundlegendes",
        items: ["Name: Aaron Franzmann", "Wohnort: Wölfersheim", "Alter: 17", "Klasse: 11"]
		
    },
    {
        title: "Hobbys",
        items: ["Badminton", "Programmieren", "Gaming"]
    },
	{
        title: "Interessen",
        items: ["Chemie", "Mathe", "Informatik"]
    }
];

let currentIndex = 0;
let panel = document.getElementById('panel');
let imageContainer = document.getElementById('image-container');

function switchText() {
    currentIndex = (currentIndex + 1) % texts.length;
    panel.innerHTML = `
        <h1>${texts[currentIndex].title}</h1>
        <ul>
            ${texts[currentIndex].items.map(item => `<li>${item}</li>`).join('')}
        </ul>
    `;
	    imageContainer.innerHTML = `<img id="image" src="${texts[currentIndex].image}" alt="Bild">`;

    if (texts[currentIndex].imagePosition === "left") {
        imageContainer.style.order = 0;
        imageContainer.style.marginRight = "20px";
        imageContainer.style.marginLeft = "0";
    } else {
        imageContainer.style.order = 1;
        imageContainer.style.marginLeft = "20px";
        imageContainer.style.marginRight = "0";
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        window.close(); 
    } else {
        switchText();
    }
});

document.addEventListener('touchstart', function(event) {
        switchText();
});