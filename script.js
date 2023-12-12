let navbar = document.querySelector('.header .navbar');
let menubtn = document.querySelector('#menu-btn');


menubtn.addEventListener('click', () => {
    menubtn.classList.toggle('fa-times')
    navbar.classList.toggle('active')
})
/* aici va fi codul care ne va ajuta la slideuri*/
var swiper = new Swiper(".home-slider",{
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
/*cod pentru slider food*/ 
var swiper = new Swiper(".food-slider",{
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints:{
        0: {
            slidesPerView: 1,
          
        },
        700: {
            slidesPerView: 2,
            
        },
        1000: {
            slidesPerView: 3,
        },

    },
});
let previewContainer = document.querySelector('.food-preview-container');
let previewBox = previewContainer.querySelectorAll('.food-preview');

document.querySelectorAll('.food .slide').forEach(food => {
    food.onclick = () => {
        previewContainer.style.display = 'flex'; 
        let name = food.getAttribute('data-name');
        previewBox.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if (name == target) {
                preview.classList.add('active');
            }
        });
    };
});

previewContainer.querySelector('#close-preview').onclick = () => {
    previewContainer.style.display = 'none';
    previewBox.forEach(close => {
        close.classList.remove('active');
    });
};
