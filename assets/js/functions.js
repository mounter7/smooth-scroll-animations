// const sections = document.querySelectorAll('section')

// window.onscroll = () => {
//     sections.forEach(section => {
//         let top = window.scrollY
//         let offset = section.offsetTop - 300
//         let height = section.offsetHeight

//         if (top >= offset && top < offset + height) {
//             section.classList.add('show-animate')
//         }
//         else {
//             section.classList.remove('show-animate')
//         }
//     })
// }

const sections = document.querySelectorAll('section')

function animation(elements) {
    for (let element of elements) {
        if (element.isIntersecting) {
            element.target.classList.add('show-animate')
        }
    }
}

const options = {
    threshold: 1
}

const io = new IntersectionObserver(animation, options)

for (let section of sections) {
    io.observe(section)
}

$(document).ready(function() {
    //code
})