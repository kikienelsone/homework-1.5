
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
let brands = document.querySelector(".brands__main-container")


showBrands = () =>{
    activeBtn.classList.add("hide")
    hideBtn.classList.add("active")
    brands.classList.add("brandsShow")

}

hideBrands = () =>{
    hideBtn.classList.remove("active")
    activeBtn.classList.add("active")
    brands.classList.remove("brandsShow")

}