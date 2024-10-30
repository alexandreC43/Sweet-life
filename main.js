// main.js
import imageSets from './imageData.js';
console.log(imageSets);
// Maintenant vous pouvez utiliser imageSets

document.addEventListener("DOMContentLoaded", function () {
    modeButtons[currentMode].classList.add('active');
    updateImage(0); // Affiche la première image
    makeMapAreasResponsive(); // Rendre les zones cliquables responsives après le chargement initial
});


// Variable pour suivre le mode actuel (toiture, rdc, r+1, r+2, r+3)
let currentMode = 'toiture';

// Variable pour suivre l'index actuel des images (de 0 à 18)
let currentIndex = 0;

// Sélectionne l'élément du curseur (slider) dans le document HTML
const slider = document.getElementById('slider');

// Tableau contenant les informations des appartements
const apartments = [
    { title: 'A34', superficie: '120m²', prix: '250 000 €', url_visite: 'https://visiteA34.com', typologie: 'T4' },
    { title: 'A33', superficie: '95m²', prix: '220 000 €', url_visite: 'https://visiteA33.com', typologie: 'T3' },
    { title: 'A32', superficie: '110m²', prix: '240 000 €', url_visite: 'https://visiteA32.com', typologie: 'T4' },
    { title: 'A31', superficie: '105m²', prix: '230 000 €', url_visite: 'https://visiteA31.com', typologie: 'T4' },
    { title: 'B34', superficie: '130m²', prix: '270 000 €', url_visite: 'https://visiteB25.com', typologie: 'T5' },
    { title: 'B33', superficie: '100m²', prix: '210 000 €', url_visite: 'https://visiteB24.com', typologie: 'T3' },
    { title: 'B32', superficie: '115m²', prix: '235 000 €', url_visite: 'https://visiteB22.com', typologie: 'T4' },
    { title: 'B31', superficie: '90m²', prix: '200 000 €', url_visite: 'https://visiteB21.com', typologie: 'T3' },
    { title: 'A21', superficie: '120m²', prix: '250 000 €', url_visite: 'https://visiteA34.com', typologie: 'T4' },
    { title: 'A22', superficie: '120m²', prix: '250 000 €', url_visite: 'https://visiteA34.com', typologie: 'T4' },
    { title: 'A23', superficie: '120m²', prix: '250 000 €', url_visite: 'https://visiteA34.com', typologie: 'T4' },
    { title: 'A24', superficie: '120m²', prix: '250 000 €', url_visite: 'https://visiteA34.com', typologie: 'T4' },
    { title: 'A25', superficie: '120m²', prix: '250 000 €', url_visite: 'https://visiteA34.com', typologie: 'T4' },
    { title: 'A26', superficie: '120m²', prix: '250 000 €', url_visite: 'https://visiteA34.com', typologie: 'T4' },
    { title: 'B25', superficie: '130m²', prix: '270 000 €', url_visite: 'https://visiteB25.com', typologie: 'T5' },
    { title: 'B24', superficie: '100m²', prix: '210 000 €', url_visite: 'https://visiteB24.com', typologie: 'T3' },
    { title: 'B23', superficie: '115m²', prix: '235 000 €', url_visite: 'https://visiteB22.com', typologie: 'T4' },
    { title: 'B22', superficie: '90m²', prix: '200 000 €', url_visite: 'https://visiteB21.com', typologie: 'T3' },
    { title: 'B21', superficie: '90m²', prix: '200 000 €', url_visite: 'https://visiteB21.com', typologie: 'T3' },
    { title: 'A11', superficie: '120m²', prix: '250 000 €', url_visite: 'https://visiteA34.com', typologie: 'T4' },
    { title: 'A12', superficie: '120m²', prix: '250 000 €', url_visite: 'https://visiteA34.com', typologie: 'T4' },
    { title: 'A13', superficie: '120m²', prix: '250 000 €', url_visite: 'https://visiteA34.com', typologie: 'T4' },
    { title: 'A14', superficie: '120m²', prix: '250 000 €', url_visite: 'https://visiteA34.com', typologie: 'T4' },
    { title: 'A15', superficie: '120m²', prix: '250 000 €', url_visite: 'https://visiteA34.com', typologie: 'T4' },
    { title: 'A16', superficie: '120m²', prix: '250 000 €', url_visite: 'https://visiteA34.com', typologie: 'T4' },
    { title: 'B15', superficie: '130m²', prix: '270 000 €', url_visite: 'https://visiteB25.com', typologie: 'T5' },
    { title: 'B14', superficie: '100m²', prix: '210 000 €', url_visite: 'https://visiteB24.com', typologie: 'T3' },
    { title: 'B13', superficie: '115m²', prix: '235 000 €', url_visite: 'https://visiteB22.com', typologie: 'T4' },
    { title: 'B12', superficie: '90m²', prix: '200 000 €', url_visite: 'https://visiteB21.com', typologie: 'T3' },
    { title: 'B11', superficie: '90m²', prix: '200 000 €', url_visite: 'https://visiteB21.com', typologie: 'T3' },
    { title: 'A01', superficie: '120m²', prix: '250 000 €', url_visite: 'https://visiteA34.com', typologie: 'T4' },
    { title: 'A02', superficie: '120m²', prix: '250 000 €', url_visite: 'https://visiteA34.com', typologie: 'T4' },
    { title: 'A03', superficie: '120m²', prix: '250 000 €', url_visite: 'https://app.lapentor.com/sphere/t2-1730290999', typologie: 'T4' },
    { title: 'A04', superficie: '120m²', prix: '250 000 €', url_visite: 'https://visiteA34.com', typologie: 'T4' },
    { title: 'A05', superficie: '120m²', prix: '250 000 €', url_visite: 'https://visiteA34.com', typologie: 'T4' },
    { title: 'A06', superficie: '120m²', prix: '250 000 €', url_visite: 'https://visiteA34.com', typologie: 'T4' },
    { title: 'B01', superficie: '130m²', prix: '270 000 €', url_visite: 'https://visiteB25.com', typologie: 'T5' },
    { title: 'B02', superficie: '100m²', prix: '210 000 €', url_visite: 'https://visiteB24.com', typologie: 'T3' },
    { title: 'B03', superficie: '115m²', prix: '235 000 €', url_visite: 'https://visiteB22.com', typologie: 'T4' },
    { title: 'B04', superficie: '90m²', prix: '200 000 €', url_visite: 'https://visiteB21.com', typologie: 'T3' },
    { title: 'B05', superficie: '90m²', prix: '200 000 €', url_visite: 'https://visiteB21.com', typologie: 'T3' },
];


// Objet contenant les références des boutons correspondant à chaque mode
const modeButtons = {
    'pieton': document.getElementById('pieton'),
    'toiture': document.getElementById('toiture'),
    'RDC': document.getElementById('rdc'),
    'R+1': document.getElementById('r1'),
    'R+2': document.getElementById('r2'),
    'R+3': document.getElementById('r3')
};

// Sélectionne l'élément de l'image principale et le map dans le document HTML
const maquette = document.querySelector("#mainImage");
const imageMap = document.getElementById('imageMap');

// Fonction pour rendre les zones cliquables responsives
function makeMapAreasResponsive() {
    $('img[usemap]').rwdImageMaps();  // Appelle rwdImageMaps pour rendre les zones cliquables responsives
}

// Fonction pour mettre à jour l'image et les zones cliquables en fonction du mode et de l'index
function updateImage(index) {
    const activeImages = imageSets[currentMode];

    if (Array.isArray(activeImages) && activeImages[index] && activeImages[index].areas) {
        const imageData = activeImages[index];
        maquette.src = imageData.src;
        maquette.setAttribute('loading', 'lazy'); // Ajoute lazy loading

        // Mise à jour des zones cliquables
        imageMap.innerHTML = '';
        if (imageData.areas) {
            imageData.areas.forEach(area => {
                const areaElement = document.createElement('area');
                areaElement.shape = area.shape;
                areaElement.coords = area.coords;
                areaElement.href = area.href;
                areaElement.alt = area.alt;
                areaElement.title = area.title;
                areaElement.addEventListener("click", (event) => {
                    event.preventDefault();
                    const apartment = apartments.find(ap => ap.title === area.title);
                    if (apartment) {
                        const apartmentInfo = `
                            Appartement n°${apartment.title} <br>
                            Superficie : ${apartment.superficie} <br>
                            Prix : ${apartment.prix} <br>
                            Typologie : ${apartment.typologie} <!-- Affiche la typologie ici -->
                        `;
                        openModal(apartmentInfo, apartment.url_visite);
                    }
                });
                imageMap.appendChild(areaElement);
            });
            
        }
    } else {
        maquette.src = activeImages[index];
        maquette.setAttribute('loading', 'lazy'); // Ajoute lazy loading
        imageMap.innerHTML = '';
    }

    // Rendre les zones cliquables responsives après la mise à jour de l'image
    makeMapAreasResponsive();

    // Mettre à jour la rotation de la boussole
    updateCompass(index);
}


// Fonction pour changer de mode (toiture, RDC, R+1, etc.)
function switchMode(mode) {
    currentMode = mode;

    // Retire la classe 'active' des boutons du mode précédent
    document.querySelector('button.active').classList.remove('active');

    // Ajoute la classe 'active' au bouton du nouveau mode
    modeButtons[mode].classList.add('active');

    // Met à jour l'image affichée
    updateImage(currentIndex);
}

// Ajoute un écouteur d'événement sur le slider (curseur)
slider.addEventListener('input', () => {
    currentIndex = slider.value - 1;
    updateImage(currentIndex);
});

// Ajoute un écouteur d'événement pour la roulette de la souris
window.addEventListener('wheel', function(event) {
    if (event.deltaY > 0) {
        // Défilement vers le bas, passe à l'image suivante
        currentIndex = (currentIndex + 1) % imageSets[currentMode].length;
    } else {
        // Défilement vers le haut, passe à l'image précédente
        currentIndex = (currentIndex - 1 + imageSets[currentMode].length) % imageSets[currentMode].length;
    }
    slider.value = currentIndex + 1;
    updateImage(currentIndex);
});

// Ajouter des événements de clic pour les boutons de mode
document.getElementById('rdc').addEventListener('click', () => switchMode('RDC'));
document.getElementById('r1').addEventListener('click', () => switchMode('R+1'));
document.getElementById('r2').addEventListener('click', () => switchMode('R+2'));
document.getElementById('r3').addEventListener('click', () => switchMode('R+3'));
document.getElementById('toiture').addEventListener('click', () => switchMode('toiture'));
document.getElementById('pieton').addEventListener('click', () => switchMode('pieton'));

// Initialisation : affiche la première image du mode par défaut (toiture)
document.addEventListener("DOMContentLoaded", function() {
    modeButtons[currentMode].classList.add('active');
    updateImage(0); // Affiche la première image
    makeMapAreasResponsive(); // Rendre les zones cliquables responsives après le chargement initial
});

// Variables pour la fenêtre modale
const modal = document.getElementById("modal");
const modalText = document.getElementById("modalText");
const visitButton = document.getElementById("visitButton");
const closeButton = document.querySelector(".close-button");

// Fonction pour ouvrir la fenêtre modale avec les informations de l'appartement
function openModal(apartmentInfo, visitUrl) {
    modalText.innerHTML = apartmentInfo;
    visitButton.href = visitUrl;
    modal.style.display = "block";
}

// Ajouter un écouteur d'événement pour fermer la fenêtre modale
closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});

// Fermer la modale si on clique en dehors de celle-ci
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});


// Sélectionne l'élément de la boussole
const boussole = document.getElementById('boussole');

// Fonction pour mettre à jour la rotation de la boussole
function updateCompass(index) {
    // Définir un angle de rotation en fonction de l'index de l'image
    const angle = index * 20; // Ajustez la logique de rotation selon vos besoins
    boussole.style.transform = `rotate(${angle}deg)`;
}




// Script pour ouvrir et fermer la modaleMap
document.getElementById('voirQuartier').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('modalMaps').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function () {
    document.getElementById('modalMaps').style.display = 'none';
});

window.addEventListener('click', function (e) {
    if (e.target === document.getElementById('modalMaps')) {
        document.getElementById('modalMaps').style.display = 'none';
    }
});






///FONCTION ZOOM IMAGE/////

const mainImage = document.getElementById('mainImage');
let scale = 1; // Échelle de zoom initiale
let isDragging = false; // État de glissement
let startX, startY, scrollLeft, scrollTop;

// Fonction de zoom avant
function zoomIn() {
    scale += 0.1;
    updateZoom();
}

// Fonction de zoom arrière
function zoomOut() {
    scale = Math.max(1, scale - 0.1); // Limite de zoom à 1
    updateZoom();
}

// Met à jour l'image avec la nouvelle échelle
function updateZoom() {
    mainImage.style.transform = `scale(${scale})`;
    mainImage.classList.add('zoom');
}

// Événements pour le glissement de l'image
mainImage.addEventListener('mousedown', (e) => {
    if (scale > 1) {
        isDragging = true;
        startX = e.pageX - mainImage.offsetLeft;
        startY = e.pageY - mainImage.offsetTop;
        scrollLeft = mainImage.offsetLeft;
        scrollTop = mainImage.offsetTop;
        mainImage.style.cursor = 'grabbing';
    }
});

mainImage.addEventListener('mouseup', () => {
    isDragging = false;
    mainImage.style.cursor = 'move';
});

mainImage.addEventListener('mouseleave', () => {
    isDragging = false;
    mainImage.style.cursor = 'default';
});

mainImage.addEventListener('mousemove', (e) => {
    if (isDragging) {
        e.preventDefault();
        const x = e.pageX - startX;
        const y = e.pageY - startY;
        mainImage.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
    }
});

// Écouteurs d'événements pour les boutons de zoom
document.getElementById('zoom-in').addEventListener('click', zoomIn);
document.getElementById('zoom-out').addEventListener('click', zoomOut);
