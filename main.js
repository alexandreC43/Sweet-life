const rendusToiture = [
    'Images/Toiture_1.jpg',
    'Images/Toiture_2.jpg',
    'Images/Toiture_3.jpg',
    'Images/Toiture_4.jpg',
    'Images/Toiture_5.jpg',
    'Images/Toiture_6.jpg',
    'Images/Toiture_7.jpg',
    'Images/Toiture_8.jpg',
    'Images/Toiture_9.jpg',
    'Images/Toiture_10.jpg',
    'Images/Toiture_11.jpg',
    'Images/Toiture_12.jpg',
    'Images/Toiture_13.jpg',
    'Images/Toiture_14.jpg',
    'Images/Toiture_15.jpg',
    'Images/Toiture_16.jpg',
    'Images/Toiture_17.jpg',
    'Images/Toiture_18.jpg',
    'Images/Toiture_19.jpg',
]

let currentMode = 'toiture';
let currentImageIndex = 0;

function updateImage() {
    const maquette = document.querySelector("#maquette img");
    maquette.src = rendusToiture[currentImageIndex];
  }


  

  // Charger la première image au démarrage
  document.addEventListener("DOMContentLoaded", updateImage);


  // Ajoute un écouteur d'événement pour la roulette de la souris
window.addEventListener('wheel', function(event) {
    if (event.deltaY > 0) {
        // Défilement vers le bas, passe à l'image suivante
        currentImageIndex = (currentImageIndex + 1) % 19; // Il y a 7 images, donc modulo 7
    } else {
        // Défilement vers le haut, passe à l'image précédente
        currentImageIndex = (currentImageIndex - 1 + 19) % 19; // Pour éviter un index négatif
    }
    // Met à jour la position du slider et l'image affichée
    slider.value = currentImageIndex + 1;
    updateImage(currentImageIndex);
});