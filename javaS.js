// Timer
let timerCounter = 0;

window.addEventListener('load', () => {
    startSlide();
    sliderInterval = setInterval(startSlide, 1000);
})

function startSlide() {
    document.querySelector(".timer").innerText = timerCounter++;
}
document.querySelector('.startTimer').addEventListener('click', startTimer);

function startTimer() {
    sliderInterval = setInterval(startSlide, 1000);
}

document.querySelector('.stopTimer').addEventListener('click', stopTimer);

function stopTimer() {
    clearInterval(sliderInterval);
}

document.querySelector('.resetTimer').addEventListener('click', resetTimer);

function resetTimer() {
    timerCounter = 0;
}

// Slider

let sliderIntervalFoto;
let sliderCounterFoto = 0;
const MAX_FOTO = 7;

window.addEventListener('load', () => {
    startSliderFoto();
    document.querySelector('.slideImage').addEventListener('mouseover', stopSliderFoto);
    document.querySelector('.slideImage').addEventListener('mouseout', startSliderFoto);
})

function stopSliderFoto() {
    clearInterval(sliderIntervalFoto);
}

function startSliderFoto() {
    sliderIntervalFoto = setInterval(nextSlideFoto, 2000);
}

function nextSlideFoto() {
    if (sliderCounterFoto >= MAX_FOTO) {
        sliderCounterFoto = 1;
    } else {
        sliderCounterFoto++
    }
    let newFoto = `url(images/${sliderCounterFoto}.jpg)`;
    document.querySelector('.slideImage').style.backgroundImage = newFoto;

}

// slider prev next

let counterSlider = 0;
const MAX_FOTOPN = 7;

document.querySelector(".next").addEventListener('click', () => {
    if (counterSlider > MAX_FOTOPN - 1) {
        counterSlider = 1;
    } else {
        counterSlider++
    }
    let newFotoPN = `url(images/${counterSlider}.jpg)`;
    document.querySelector('.slideImagePN').style.backgroundImage = newFotoPN;
});

document.querySelector(".prev").addEventListener('click', () => {
    if (counterSlider <= 1) {
        counterSlider = MAX_FOTOPN;
    } else {
        counterSlider--
    }
    let newFotoPN = `url(images/${counterSlider}.jpg)`;
    document.querySelector('.slideImagePN').style.backgroundImage = newFotoPN;
    console.log(newFotoPN);
});

let counterDrops = 0;
const MAX_FOTODROPS = 10;

document.querySelector('.nextD').addEventListener('click', () => {
    if (counterDrops > MAX_FOTODROPS - 1) {
        counterDrops = 1;
    } else {
        counterDrops++;
    }
    let newFotoDrops = `url(images/img${counterDrops}.jpg)`;
    document.querySelector('.slideImageDrops').style.backgroundImage = newFotoDrops;
    console.log(newFotoDrops);
});

document.querySelector('.prevD').addEventListener('click', () => {
    if (counterDrops <= 1) {
        counterDrops = MAX_FOTODROPS;
    } else {
        counterDrops--;
    }
    let newFotoDrops = `url(images/img${counterDrops}.jpg)`;
    document.querySelector('.slideImageDrops').style.backgroundImage = newFotoDrops;
    console.log(newFotoDrops);
});

// 1
document.querySelector('.drp1').addEventListener('click', () => {
    document.querySelector('.slideImageDrops').style.backgroundImage = 'url("images/img1.jpg")';
    document.querySelector('.drp1').style.backgroundColor = "rgba(0, 0, 0, 0.699)";
});
// 2
document.querySelector('.drp2').addEventListener('click', () => {
    document.querySelector('.slideImageDrops').style.backgroundImage = 'url("images/img2.jpg")';
    document.querySelector('.drp2').style.backgroundColor = "rgba(0, 0, 0, 0.699)";
});
// 3
document.querySelector('.drp3').addEventListener('click', () => {
    document.querySelector('.slideImageDrops').style.backgroundImage = 'url("images/img3.jpg")';
    document.querySelector('.drp3').style.backgroundColor = "rgba(0, 0, 0, 0.699)";
});
// 4
document.querySelector('.drp4').addEventListener('click', () => {
    document.querySelector('.slideImageDrops').style.backgroundImage = 'url("images/img4.jpg")';
    document.querySelector('.drp4').style.backgroundColor = "rgba(0, 0, 0, 0.699)";
});
// 5
document.querySelector('.drp5').addEventListener('click', () => {
    document.querySelector('.slideImageDrops').style.backgroundImage = 'url("images/img5.jpg")';
    document.querySelector('.drp5').style.backgroundColor = "rgba(0, 0, 0, 0.699)";
});
// 6
document.querySelector('.drp6').addEventListener('click', () => {
    document.querySelector('.slideImageDrops').style.backgroundImage = 'url("images/img6.jpg")';
    document.querySelector('.drp6').style.backgroundColor = "rgba(0, 0, 0, 0.699)";
});
// 7
document.querySelector('.drp7').addEventListener('click', () => {
    document.querySelector('.slideImageDrops').style.backgroundImage = 'url("images/img7.jpg")';
    document.querySelector('.drp7').style.backgroundColor = "rgba(0, 0, 0, 0.699)";
});
// 8
document.querySelector('.drp8').addEventListener('click', () => {
    document.querySelector('.slideImageDrops').style.backgroundImage = 'url("images/img8.jpg")';
    document.querySelector('.drp8').style.backgroundColor = "rgba(0, 0, 0, 0.699)";
});
// 9
document.querySelector('.drp9').addEventListener('click', () => {
    document.querySelector('.slideImageDrops').style.backgroundImage = 'url("images/img9.jpg")';
    document.querySelector('.drp9').style.backgroundColor = "rgba(0, 0, 0, 0.699)";
});
// 10
document.querySelector('.drp10').addEventListener('click', () => {
    document.querySelector('.slideImageDrops').style.backgroundImage = 'url("images/img10.jpg")';
    document.querySelector('.drp10').style.backgroundColor = "rgba(0, 0, 0, 0.699)";
});

// sec5

var slideIndex = 1;
// переменная slideIndex, индекс,цифра, минимум 1
showDivs(slideIndex);
// функция showDivs с аргументом slideIndex, основная функция
function plusDivs(n) {
    showDivs(slideIndex += n);
}
// функция для кнопок вперед и назад.
function currentDiv(n) {
    showDivs(slideIndex = n);
}
// функция для кнопок demo
function showDivs(n) {
    // главная функция
    var i;
    var x = document.getElementsByClassName("mySlides");
    // переменная,картинка с классом mySlides
    if (n > x.length) { slideIndex = 1 }
    //  если аргумент n больше длины массива, то slideIndex равен 1
    if (n < 1) { slideIndex = x.length }
    // если аргумент n меньше 1, то slideIndex равен длине массива
    for (i = 0; i < x.length; i++) {
        // начинаем бежать с нулевого элемента, i меньше длины массива картинок, бежим по массиву +1
        x[i].style.display = "none";
        //   если условия выполнены, то фото х с индексом  [i] делаем display = "none"
    }
    x[slideIndex - 1].style.display = "block";
}

let indexOrange = 1;
grandFuncOrange(indexOrange);

function plusDivsOrange(number) {
    grandFuncOrange(indexOrange += number);
};

function currentOrange(number) {
    grandFuncOrange(indexOrange = number);
};

function grandFuncOrange(number) {
    let index = 0;

    let imgOrange = document.getElementsByClassName('mySlidesOrange');


    if (number > imgOrange.length) {
        indexOrange = 1;
    }
    if (number < 1) {
        indexOrange = imgOrange.length;
    }
    for (index = 0; index < imgOrange.length; index++) {
        imgOrange[index].style.display = "none";
    }
    imgOrange[indexOrange - 1].style.display = "block";
};