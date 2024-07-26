// Appunti
// ` Backtick

//CONTAINER E ARRAY
const imgContainer = document.querySelector('.img-container');
// console.log('img container', imgContainer, typeof imgContainer);
// let myImage = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp",];
// array di oggetti
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
// per il momento modifico il codice vecchio per adattarlo al nuovo array
for (let i = 0; i < images.length; i++) {

    if (i == 0) {
        imgContainer.innerHTML += `<img src="${images[i].image}" class="active" alt="image">`
    }
    else {
        imgContainer.innerHTML += `<img src="${images[i].image}" alt="image">`
    }
};

//BUTTONS
const nextBtn = document.getElementById("next-button");
const prevBtn = document.getElementById("prev-button");
let activeImg = 1;

nextBtn.addEventListener('click',
    function () {
        // console.log('next');
        if (activeImg < images.length) {
            // al click activeImg avrà valore x
            // tolgo all' elemento x la classe active
            document.querySelector('.img-container > img:nth-child(' + activeImg + ')').classList.remove('active');
            // incremento x
            activeImg++;
            // aggiungo a x la classe active
            document.querySelector('.img-container > img:nth-child(' + activeImg + ')').classList.add('active');
        }

    }
);

prevBtn.addEventListener('click',
    function () {
        if (activeImg > 1) {
            document.querySelector('.img-container > img:nth-child(' + activeImg + ')').classList.remove('active');
            activeImg--;
            document.querySelector('.img-container > img:nth-child(' + activeImg + ')').classList.add('active');
        }
    }
);



