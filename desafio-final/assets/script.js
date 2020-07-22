const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");
const images = document.querySelectorAll("img");
const cards = document.querySelectorAll(".card");

console.log('antes do for');

for (let card of cards) {
    console.log('no for');
    console.log(card);

    card.addEventListener("click", function() {
        console.log('no modal');
        modalOverlay.classList.add('active')
        console.log('no modal');
        const imageId = card.getElementsByTagName("img");
        const srcImg = imageId[0].src;
        const info1d = card.getElementsByTagName("p");
        console.log(info1d[0].innerText);
        modalOverlay.querySelector("img").src=`${srcImg}`
        modalOverlay.querySelector(".card__info1").innerText=`${info1d[0].innerText}`
        modalOverlay.querySelector(".card__info2").innerText=`${info1d[1].innerText}`

    } )
}

closeModal = document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove('active')
})
