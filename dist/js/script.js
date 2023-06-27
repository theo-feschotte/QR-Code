// Récupérer le texte saisi
textQRC = document.getElementById('textQRC');

// Récupérer les couleurs
colorQRC = document.getElementById('colorQRC');
colorBkgQRC = document.getElementById('colorBkgQRC');

// Récupérer la balise span dans la balise p
enteredText = document.getElementById('enteredText');

function generatorQRC() {
    // Changer la couleur de fond de section 2
    document.getElementsByTagName('section')[1].style.backgroundColor = colorBkgQRC.value;

    // Changer la couleur du paragraphe de la section 2
    document.getElementsByTagName('p')[0].style.color = colorQRC.value;
    enteredText.style.color = colorQRC.value;

    // Ajout de https si manquant dans le texte saisi
    var containHTTPS = textQRC.value.indexOf('https://');
    var containHTTP = textQRC.value.indexOf('http://');
    if (containHTTPS !== -1) {
        enteredText.innerHTML = textQRC.value.replace('https://', '');
    } else if (containHTTP !== -1) {
        enteredText.innerHTML = textQRC.value.replace('http://', '');
    } else {
        enteredText.innerHTML = textQRC.value;
    };

    // Récupérer l'élément div contenant le QR Code
    var containerQRC = document.getElementById('containerQRC');
    // Changer son display:none par display:flex
    containerQRC.style.display = 'flex';
    // Réinitialiser son contenu à chaque nouvelle génération
    containerQRC.innerHTML = '';

    // Monter le QR Code
    new QRCode(containerQRC, textQRC.value);
};

textQRC.addEventListener('input', generatorQRC);
colorQRC.addEventListener('input', generatorQRC);
colorBkgQRC.addEventListener('input', generatorQRC);