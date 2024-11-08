// main.js

// Importation des ensembles d'images
import imageSets from './imageData.js';
console.log(imageSets);

// Variable pour suivre le mode actuel (toiture, rdc, r+1, r+2, r+3)
let currentMode = 'toiture';

// Variable pour suivre l'index actuel des images (de 0 à N)
let currentIndex = 0;

// Sélectionne l'élément du curseur (slider) dans le document HTML
const slider = document.getElementById('slider');

// Tableau contenant les informations des appartements
const apartments = [
    { title: 'A34', url_visite: 'https://visiteA34.com', typologie: 'T3',src_plan: 'Plans/A34.pdf' },
    { title: 'A33', rl_visite: 'https://visiteA33.com', typologie: 'T5',src_plan: 'Plans/A33.pdf' },
    { title: 'A32', url_visite: 'https://visiteA32.com', typologie: 'T5' ,src_plan: 'Plans/A32.pdf'},
    { title: 'A31', url_visite: 'https://visiteA31.com', typologie: 'T3' ,src_plan: 'Plans/A31.pdf'},
    { title: 'B34', url_visite: 'https://visiteB25.com', typologie: 'T5' ,src_plan: 'Plans/B34.pdf'},
    { title: 'B33', url_visite: 'https://visiteB24.com', typologie: 'T3' ,src_plan: 'Plans/B33.pdf'},
    { title: 'B32', url_visite: 'https://visiteB22.com', typologie: 'T4' ,src_plan: 'Plans/B32.pdf'},
    { title: 'B31', rl_visite: 'https://visiteB21.com', typologie: 'T3' ,src_plan: 'Plans/B31.pdf'},
    { title: 'A21', url_visite: 'https://visiteA34.com', typologie: 'T3' ,src_plan: 'Plans/A21.pdf'},
    { title: 'A22', url_visite: 'https://visiteA34.com', typologie: 'T3',src_plan: 'Plans/A22.pdf'},
    { title: 'A23', url_visite: 'https://visiteA34.com', typologie: 'T2' ,src_plan: 'Plans/A23.pdf'},
    { title: 'A24', url_visite: 'https://visiteA34.com', typologie: 'T2' ,src_plan: 'Plans/A24.pdf'},
    { title: 'A25', url_visite: 'https://visiteA34.com', typologie: 'T4' ,src_plan: 'Plans/A25.pdf'},
    { title: 'A26', url_visite: 'https://visiteA34.com', typologie: 'T3' ,src_plan: 'Plans/A26.pdf'},
    { title: 'B25', url_visite: 'https://visiteB25.com', typologie: 'T4' ,src_plan: 'Plans/B25.pdf'},
    { title: 'B24', url_visite: 'https://visiteB24.com', typologie: 'T3' ,src_plan: 'Plans/B24.pdf'},
    { title: 'B23', url_visite: 'https://visiteB22.com', typologie: 'T3' ,src_plan: 'Plans/B23.pdf'},
    { title: 'B22', rl_visite: 'https://visiteB21.com', typologie: 'T3' ,src_plan: 'Plans/B22.pdf'},
    { title: 'B21', rl_visite: 'https://visiteB21.com', typologie: 'T2' ,src_plan: 'Plans/B21.pdf'},
    { title: 'A11', url_visite: 'https://visiteA34.com', typologie: 'T3' ,src_plan: 'Plans/A11.pdf'},
    { title: 'A12', url_visite: 'https://visiteA34.com', typologie: 'T3' ,src_plan: 'Plans/A12.pdf'},
    { title: 'A13', url_visite: 'https://visiteA34.com', typologie: 'T2' ,src_plan: 'Plans/A13.pdf'},
    { title: 'A14', url_visite: 'https://visiteA34.com', typologie: 'T2' ,src_plan: 'Plans/A14.pdf'},
    { title: 'A15', url_visite: 'https://visiteA34.com', typologie: 'T4' ,src_plan: 'Plans/A15.pdf'},
    { title: 'A16', url_visite: 'https://visiteA34.com', typologie: 'T3' ,src_plan: 'Plans/A16.pdf'},
    { title: 'B15', url_visite: 'https://visiteB25.com', typologie: 'T4' ,src_plan: 'Plans/B15.pdf'},
    { title: 'B14', url_visite: 'https://visiteB24.com', typologie: 'T3' ,src_plan: 'Plans/B14.pdf'},
    { title: 'B13', url_visite: 'https://visiteB22.com', typologie: 'T3' ,src_plan: 'Plans/B13.pdf'},
    { title: 'B12', rl_visite: 'https://visiteB21.com', typologie: 'T3' ,src_plan: 'Plans/B12.pdf'},
    { title: 'B11', rl_visite: 'https://visiteB21.com', typologie: 'T2' ,src_plan: 'Plans/B11.pdf'},
    { title: 'A01', url_visite: 'https://visiteA34.com', typologie: 'T3' ,src_plan: 'Plans/A01.pdf'},
    { title: 'A02', url_visite: 'https://visiteA34.com', typologie: 'T3' ,src_plan: 'Plans/A02.pdf'},
    { title: 'A03', url_visite: 'https://app.lapentor.com/sphere/t2-1730290999', typologie: 'T2',src_plan: 'Plans/A03.pdf' },
    { title: 'A04', url_visite: 'https://visiteA34.com', typologie: 'T2',src_plan: 'Plans/A04.pdf' },
    { title: 'A05', url_visite: 'https://visiteA34.com', typologie: 'T4',src_plan: 'Plans/A05.pdf' },
    { title: 'A06', url_visite: 'https://visiteA34.com', typologie: 'T3' ,src_plan: 'Plans/A06.pdf'},
    { title: 'B01', url_visite: 'https://visiteB25.com', typologie: 'T2' ,src_plan: 'Plans/B01.pdf'},
    { title: 'B02', url_visite: 'https://visiteB24.com', typologie: 'T3' ,src_plan: 'Plans/B02.pdf'},
    { title: 'B03', url_visite: 'https://visiteB22.com', typologie: 'T3' ,src_plan: 'Plans/B03.pdf'},
    { title: 'B04', rl_visite: 'https://visiteB21.com', typologie: 'T4' ,src_plan: 'Plans/B04.pdf'}
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

                // Écouteur d'événement pour afficher la modale avec les détails de l'appartement
                areaElement.addEventListener("click", (event) => {
                    event.preventDefault();
                    const apartment = apartments.find(ap => ap.title === area.title);
                    if (apartment) {
                        openModal(apartment);
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
    const activeButton = document.querySelector('button.active');
    if (activeButton) {
        activeButton.classList.remove('active');
    }

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
const planButton = document.getElementById("planButton"); // Assurez-vous que cet élément existe dans votre HTML
const closeButton = document.querySelector(".close-button");

// Fonction pour ouvrir la fenêtre modale avec les informations de l'appartement
function openModal(apartment) {
    const apartmentInfo = `
        Appartement n°${apartment.title} <br>
        Typologie : ${apartment.typologie}
    `;
    modalText.innerHTML = apartmentInfo;

    // Mettre à jour le lien du bouton de visite
    if (apartment.url_visite) {
        visitButton.href = apartment.url_visite;
        visitButton.style.display = 'inline';
  
    }

    // Mettre à jour le lien du planButton avec src_plan
    if (apartment.src_plan) {
        planButton.href = apartment.src_plan;
        planButton.style.display = 'inline';
    } 
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

/// FONCTION ZOOM IMAGE /////

const mainImage = document.getElementById('mainImage');
let scale = 1; // Échelle de zoom initiale
let isDragging = false; // État de glissement
let startX, startY;

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

// Empêcher le comportement par défaut lors du démarrage du glissement
mainImage.addEventListener('dragstart', function(event) {
    event.preventDefault();
});

// Événements pour le glissement de l'image
mainImage.addEventListener('mousedown', (e) => {
    e.preventDefault(); // Empêche le comportement par défaut
    if (scale > 1) {
        isDragging = true;
        startX = e.pageX - mainImage.offsetLeft;
        startY = e.pageY - mainImage.offsetTop;
        mainImage.style.cursor = 'grabbing';
    } else {
        // Initialisation pour le défilement des images
        isDragging = true;
        startX = e.pageX;
        mainImage.style.cursor = 'grabbing';
    }
});

mainImage.addEventListener('mouseup', () => {
    isDragging = false;
    mainImage.style.cursor = 'default';
});

mainImage.addEventListener('mouseleave', () => {
    isDragging = false;
    mainImage.style.cursor = 'default';
});

mainImage.addEventListener('mousemove', (e) => {
    if (isDragging && scale > 1) {
        e.preventDefault(); // Empêche le comportement par défaut
        const x = e.pageX - startX;
        const y = e.pageY - startY;
        mainImage.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
    } else if (isDragging && scale === 1) {
        // Gestion du défilement des images
        e.preventDefault(); // Empêche le comportement par défaut
        const x = e.pageX;
        const moveDistance = x - startX;

        if (Math.abs(moveDistance) > 30) { // Seuil ajusté pour plus de réactivité
            if (moveDistance < 0) {
                // Mouvement vers la gauche, image suivante
                currentIndex = (currentIndex + 1) % imageSets[currentMode].length;
            } else {
                // Mouvement vers la droite, image précédente
                currentIndex = (currentIndex - 1 + imageSets[currentMode].length) % imageSets[currentMode].length;
            }
            slider.value = currentIndex + 1;
            updateImage(currentIndex);
            startX = e.pageX; // Réinitialiser startX pour continuer le défilement
        }
    }
});

// Écouteurs d'événements pour les boutons de zoom
document.getElementById('zoom-in').addEventListener('click', zoomIn);
document.getElementById('zoom-out').addEventListener('click', zoomOut);

