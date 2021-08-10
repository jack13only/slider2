const next = document.querySelector('.btn-up')
const prev = document.querySelector('.btn-down')
const slides = document.querySelectorAll('.slide')
const dots = document.querySelectorAll('.dots')
let index = 0;



const activeSlide = n => {
    for (slide of slides) {
        slide.classList.remove('active')
    }
    slides[n].classList.add('active')
}

const activeDot = n => {
    for (dot of dots) {
        dot.classList.remove('active')
    }
    dots[n].classList.add('active')
}

const changeSlide = (x) => {
    activeSlide(x)
    activeDot(x)
}

const nextSlide = () => {
    if (index === slides.length - 1) {
        index = 0;
        changeSlide(index)
    } else {
        index++;
        changeSlide(index)
    }
}

const prevSlide = () => {
    if (index === 0) {
        index = slides.length - 1;
        changeSlide(index)
    } else {
        index--;
        changeSlide(index)
    }
}

next.addEventListener('click', () => {
    nextSlide()
    clearTimeout(timerId)
    }
)

prev.addEventListener('click', () => {
    prevSlide()
    clearTimeout(timerId)
    }
)

for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', () => {
        changeSlide(i)
        clearTimeout(timerId)
    })
}

let timerId = setInterval(nextSlide, 2000)