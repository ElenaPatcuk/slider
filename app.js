const slides = document.querySelectorAll('.slide')

for(const slide of slides){
    slide.addEventListener('click', () =>{
        clearActiveClesses()

        slide.classList.add('active')
    })
}

function clearActiveClesses() {
    slides.forEach(slide => {
        slide.classList.remove('active')
    })
}