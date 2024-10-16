// Variable pour suivre le mode actuel (toiture, rdc, r+1, r+2, r+3)
let currentMode = 'toiture';

// Variable pour suivre l'index actuel des images (de 0 à 18)
let currentIndex = 0;

// Sélectionne l'élément du curseur (slider) dans le document HTML
const slider = document.getElementById('slider');

// Objet contenant les images et leurs coordonnées pour le mode R+3
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
    'R+3': [
        {
            src: 'Images/R3_1.jpg',
            areas: [
                { shape: 'circle', coords: '311,414,51', alt: 'A34', title: 'A34', superficie: '120m²', prix: '250 000 €' },
                { shape: 'circle', coords: '364,529,55', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '749,524,57', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '725,410,51', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '1195,431,56', alt: 'B25', title: 'B25' },
                { shape: 'circle', coords: '1366,502,48', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '1597,608,49', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '1580,480,51', alt: 'B21', title: 'B21' }
            ]
        },
        {
            src: 'Images/R3_2.jpg',
            areas: [
                { shape: 'circle', coords: '778,248,61', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '754,367,57', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '386,308,60', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '388,173,50', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '1597,457,55', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '1554,589,62', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '1376,451,61', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '1236,338,67', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R3_3.jpg',
            areas: [
                { shape: 'circle', coords: '802,215,62', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '717,318,57', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '396,203,61', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '460,85,53', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '1509,545,57', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '1425,667,61', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '1295,508,67', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '1198,380,63', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R3_4.jpg',
            areas: [
                { shape: 'circle', coords: '817,242,61', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '710,341,57', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '447,191,59', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '545,85,57', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '1427,665,57', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '1327,774,63', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '1229,603,68', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '1180,458,65', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R3_5.jpg',
            areas: [
                { shape: 'circle', coords: '869,242,51', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '710,315,74', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '540,120,61', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '667,43,53', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '1239,781,57', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '1070,857,63', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '1061,668,76', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '1105,519,62', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R3_6.jpg',
            areas: [
                { shape: 'circle', coords: '1062,345,66', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '886,373,59', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '828,144,61', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '995,102,47', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '1132,922,61', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '927,939,75', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '1027,773,74', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '1136,654,61', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R3_7.jpg',
            areas: [
                { shape: 'circle', coords: '1171,430,59', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '986,389,71', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '1107,189,56', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '1300,188,54', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '764,960,57', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '544,917,87', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '801,789,71', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '983,719,62', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R3_8.jpg',
            areas: [
                { shape: 'circle', coords: '1203,423,71', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '1043,358,65', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '1236,176,68', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '1435,203,52', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '621,857,63', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '428,801,81', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '727,709,73', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '925,675,68', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R3_9.jpg',
            areas: [
                { shape: 'circle', coords: '1292,516,70', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '1215,387,59', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '1521,298,53', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '1663,390,53', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '474,710,62', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '389,587,61', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '659,608,65', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '866,629,54', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R3_10.jpg',
            areas: [
                { shape: 'circle', coords: '1231,561,47', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '1191,434,56', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '1539,400,63', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '1645,532,62', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '382,551,56', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '342,408,72', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '581,497,58', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '756,579,71', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R3_11.jpg',
            areas: [
                { shape: 'circle', coords: '1215,613,56', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '1222,483,59', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '1602,514,64', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '1651,664,61', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '366,470,63', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '403,337,61', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '586,446,61', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '736,554,63', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R3_12.jpg',
            areas: [
                { shape: 'circle', coords: '1102,597,70', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '1183,474,58', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '1529,571,68', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '1503,726,55', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '369,305,64', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '473,173,66', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '590,309,63', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '686,444,59', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R3_13.jpg',
            areas: [
                { shape: 'circle', coords: '1065,694,61', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '1194,590,62', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '1455,773,71', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '1358,904,63', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '581,230,47', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '716,142,59', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '754,291,64', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '752,432,47', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R3_14.jpg',
            areas: [
                { shape: 'circle', coords: '888,701,53', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '1058,635,60', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '1231,879,57', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '1063,965,59', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '627,190,56', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '804,125,61', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '776,282,52', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '702,419,63', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R3_15.jpg',
            areas: [
                { shape: 'circle', coords: '735,659,63', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '920,659,54', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '884,920,54', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '668,946,48', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '933,122,51', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '1123,145,60', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '965,258,60', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '808,336,58', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R3_16.jpg',
            areas: [
                { shape: 'circle', coords: '724,596,58', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '909,645,62', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '723,864,70', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '512,829,60', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '1229,140,56', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '1409,195,62', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '1190,268,60', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '998,315,61', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R3_17.jpg',
            areas: [
                { shape: 'circle', coords: '716,436,63', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '878,515,66', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '610,697,58', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '427,630,57', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '1394,93,52', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '1543,173,72', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '1290,205,58', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '1095,217,63', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R3_18.jpg',
            areas: [
                { shape: 'circle', coords: '742,407,68', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '854,522,63', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '516,651,62', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '377,548,51', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '1529,191,59', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '1653,297,65', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '1383,283,52', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '1175,272,66', alt: 'B25', title: 'B25' }
            ]
        },
        {
            src: 'Images/R3_19.jpg',
            areas: [
                { shape: 'circle', coords: '677,321,61', alt: 'A31', title: 'A31' },
                { shape: 'circle', coords: '735,448,58', alt: 'A32', title: 'A32' },
                { shape: 'circle', coords: '350,507,57', alt: 'A33', title: 'A33' },
                { shape: 'circle', coords: '271,383,60', alt: 'A34', title: 'A34' },
                { shape: 'circle', coords: '1531,258,54', alt: 'B21', title: 'B21' },
                { shape: 'circle', coords: '1578,401,64', alt: 'B22', title: 'B22' },
                { shape: 'circle', coords: '1343,331,59', alt: 'B24', title: 'B24' },
                { shape: 'circle', coords: '1151,284,61', alt: 'B25', title: 'B25' }
            ]
        }
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
                areaElement.addEventListener("click", (event) => {
                    event.preventDefault();
                    console.log(area);  // Vérifie si l'objet area contient bien les informations attendues
                    const apartmentInfo = `Appartement n°${area.alt} - Superficie ${area.superficie} - Prix ${area.prix}`;
                    console.log(apartmentInfo);  // Vérifie que le texte est bien formé
                    openModal(apartmentInfo);
                });
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

// Variables pour la fenêtre modale
const modal = document.getElementById("modal");
const modalText = document.getElementById("modalText");
const closeButton = document.querySelector(".close-button");

// Fonction pour ouvrir la fenêtre modale avec les informations de l'appartement
function openModal(apartmentInfo) {
    modalText.textContent = apartmentInfo;
    modal.style.display = "block";
}

// Événement pour fermer la fenêtre modale en cliquant sur le bouton de fermeture
closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});

// Événement pour fermer la fenêtre modale en cliquant en dehors du contenu de la modale
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});