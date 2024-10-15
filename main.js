// Variable pour suivre le mode actuel (toiture, rdc, r+1, etc.)
let currentMode = 'toiture';

// Variable pour suivre l'index actuel des images (de 0 à 18)
let currentIndex = 0;

// Sélectionne l'élément du curseur (slider) dans le document HTML
const slider = document.getElementById('slider');

// Objet contenant les tableaux d'images correspondant à chaque mode
const imageSets = {
    'toiture': [
        'Images/Toiture_1.jpg', 'Images/Toiture_2.jpg', 'Images/Toiture_3.jpg',
        'Images/Toiture_4.jpg', 'Images/Toiture_5.jpg', 'Images/Toiture_6.jpg',
        'Images/Toiture_7.jpg', 'Images/Toiture_8.jpg', 'Images/Toiture_9.jpg',
        'Images/Toiture_10.jpg', 'Images/Toiture_11.jpg', 'Images/Toiture_12.jpg',
        'Images/Toiture_13.jpg', 'Images/Toiture_14.jpg', 'Images/Toiture_15.jpg',
        'Images/Toiture_16.jpg', 'Images/Toiture_17.jpg', 'Images/Toiture_18.jpg',
        'Images/Toiture_19.jpg'
    ],
    'RDC': [
        // Ajoute ici les images du mode RDC
    ],
    'R+1': [
        // Ajoute ici les images du mode R+1
    ],
    'R+2': [
        // Ajoute ici les images du mode R+2
    ],
    'R+3': [
        // Ajoute ici les images du mode R+3
    ]
};

// Objet contenant les références des boutons correspondant à chaque mode
const modeButtons = {
    'toiture': document.getElementById('toiture'),
    'RDC': document.getElementById('rdc'),
    'R+1': document.getElementById('r1'),
    'R+2': document.getElementById('r2'),
    'R+3': document.getElementById('r3')
};

// Sélectionne l'élément de l'image principale à afficher
const maquette = document.querySelector("#maquette img");

// Fonction pour mettre à jour l'image affichée en fonction du mode et de l'index
function updateImage(index) {
    const activeImages = imageSets[currentMode];
    if (activeImages.length > 0) {
        maquette.src = activeImages[index];
    }
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
    // Met à jour la position du slider et l'image affichée
    slider.value = currentIndex + 1;
    updateImage(currentIndex);
});

// Ajouter des événements de clic pour les boutons de mode
document.getElementById('rdc').addEventListener('click', () => switchMode('RDC'));
document.getElementById('r1').addEventListener('click', () => switchMode('R+1'));
document.getElementById('r2').addEventListener('click', () => switchMode('R+2'));
document.getElementById('r3').addEventListener('click', () => switchMode('R+3'));
document.getElementById('toiture').addEventListener('click', () => switchMode('toiture'));

// Initialisation : affiche la première image du mode par défaut (toiture)
document.addEventListener("DOMContentLoaded", function() {
    modeButtons[currentMode].classList.add('active');
    updateImage(0); // Affiche la première image
});
