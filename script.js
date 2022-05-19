
    let swiper = new Swiper(".swiper", {
    slidesPerView: 1.2,
    spaceBetween: 30,
    keyboard: {
    enabled: true,
},
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
},
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
},
});


let activeBtn = document.querySelector(".brands_show-button")
let hideBtn = document.querySelector(".brands_hide-button")
let brands = document.querySelectorAll(".hidden")


showBrands = () =>{
    activeBtn.classList.add("hide")

    for (let i = 0; i < brands.length; i++) {
         brands[i].classList.add("active")
     }
    hideBtn.classList.add("active")
}

hideBrands = () =>{
    hideBtn.classList.remove("active")
    activeBtn.classList.add("active")
    for (let i = 0; i < brands.length; i++) {
         brands[i].classList.add("brandsHide")
     }
}