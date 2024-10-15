// Variable pour suivre le mode actuel (toiture, rdc, r+1, r+2, r+3)
let currentMode = 'toiture';

// Variable pour suivre l'index actuel des images (de 0 à 18)
let currentIndex = 0;

// Sélectionne l'élément du curseur (slider) dans le document HTML
const slider = document.getElementById('slider');

// Objet contenant les tableaux d'images et des coordonnées map area pour chaque mode
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
        {
            src: 'Images/R3_1.jpg',
            areas: [
                { shape: 'circle', coords: '311,414,51', href: 'https://www.google.com', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '364,529,55', href: 'https://www.google.com', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '749,524,57', href: 'https://www.google.com', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '725,410,51', href: 'https://www.google.com', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '1195,431,56', href: 'https://www.google.com', alt: 'B25', title: 'B25' },
                { shape: 'circle', coords: '1366,502,48', href: 'https://www.google.com', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '1597,608,49', href: 'https://www.google.com', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '1580,480,51', href: 'https://www.google.com', alt: 'B21', title: 'B21' }
            ]
        },
        {
            src: 'Images/R3_2.jpg',
            areas: [
                { shape: 'rect', coords: '45,50,300,400', href: 'appartement3.html', alt: 'Appart 3' },
                { shape: 'circle', coords: '400,320,60', href: 'appartement4.html', alt: 'Appart 4' }
            ]
        },
        {
            src: 'Images/R3_3.jpg',
            areas: [
                { shape: 'poly', coords: '100,100,150,150,200,100', href: 'appartement5.html', alt: 'Appart 5' }
            ]
        },
        // Ajoute les autres images jusqu'à la 19e avec leurs map areas
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
    
    // Si le mode R+3 contient des objets avec des images et des zones
    if (currentMode === 'R+3') {
        const imageData = activeImages[index];
        maquette.src = imageData.src;

        // Mise à jour des zones cliquables
        imageMap.innerHTML = ''; // On efface les anciennes zones
        if (imageData.areas) {
            imageData.areas.forEach(area => {
                const areaElement = document.createElement('area');
                areaElement.shape = area.shape;
                areaElement.coords = area.coords;
                areaElement.href = area.href;
                areaElement.alt = area.alt;
                areaElement.title = area.title;
                imageMap.appendChild(areaElement);
            });
        }
    } else {
        // Si le mode ne contient que des images (comme toiture), sans map area
        maquette.src = activeImages[index];
        imageMap.innerHTML = ''; // Aucun map area pour ce mode
    }

    // Rendre les zones cliquables responsives après la mise à jour de l'image
    makeMapAreasResponsive();
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

// Initialisation : affiche la première image du mode par défaut (toiture)
document.addEventListener("DOMContentLoaded", function() {
    modeButtons[currentMode].classList.add('active');
    updateImage(0); // Affiche la première image
    makeMapAreasResponsive(); // Rendre les zones cliquables responsives après le chargement initial
});
