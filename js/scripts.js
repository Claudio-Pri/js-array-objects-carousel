// Appunti
// ` Backtick

//CONTAINER E ARRAY
const imgContainer = document.querySelector('.img-container');
// console.log('img container', imgContainer, typeof imgContainer);
let myImage = ["img/fantasy-1.jpeg", "img/fantasy-2.jpeg", "img/fantasy-3.jpeg", "img/fantasy-4.jpeg", "img/fantasy-5.jpeg",];

for (let i = 0; i < myImage.length; i++) {

    if (i == 0) {
        imgContainer.innerHTML += `<img src="${myImage[i]}" class="active" alt="image">`
    }
    else {
        imgContainer.innerHTML += `<img src="${myImage[i]}" alt="image">`
    }
};

//BUTTONS
const nextBtn = document.getElementById("next-button");
const prevBtn = document.getElementById("prev-button");
let activeImg = 1;

nextBtn.addEventListener('click',
    function () {
        // console.log('next');
        if (activeImg < myImage.length) {
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



