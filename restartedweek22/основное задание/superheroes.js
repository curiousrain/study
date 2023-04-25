const superheroesList = document.getElementById('superheroes-list');
const superheroesObject = JSON.parse(superheroes);
const popup = document.getElementById('rate-popup');
const hearts = document.querySelectorAll(".hearts");
const reviewRate = document.getElementById('review-rate');
let index = -1;

let showList = superheroesObject.map((element, index) => {
    const rate = window.localStorage.getItem(index);
    return `<div class = "superhero">
    <h3 class ="sh-name"><b>Имя:</b> ${element.name}</h3>
    <p class = "sh-heartvalue">${rate || ""}</p>
    <p class = "sh-universe"><b>Вселенная:</b> ${element.universe}</p>
    <p class ="sh-alterego"><b>Альтерэго:</b> ${element.alterego}</p>
    <p class ="sh-occupation"><b>Род деятельности:</b> ${element.occupation}</p>
    <p class ="sh-friends"><b>Союзники:</b> ${element.friends}</p>
    <p class ="sh-powers"><b>Суперсилы:</b> ${element.superpowers}</p>
    <img class = "sh-image" src = "${element.url}" >
    <p class = "sh-info">${element.info}</p>
    <button class = "sh-review" onclick = "review(this)" data-sh = "${index}"> Оцените супергероя</button>
    </div>`
}

).join("\n");

superheroesList.innerHTML = showList;

const heroesRates = document.querySelectorAll(".sh-heartvalue");


function review(element) {
    const position = element.getBoundingClientRect();
    popup.style.left = `${position.left}px`;
    popup.style.top = `${position.top}px`;
    popup.classList.add("active");
    index = element.dataset.sh;
    const heartValue = window.localStorage.getItem(index);
    reviewRate.dataset.heart = heartValue;
    return true;
}

document.addEventListener("scroll", (event) => {
    if (popup.classList.contains("active"))
        popup.classList.remove("active");

    return true;
})

hearts.forEach(heart => {
    const heartValue = heart.dataset.heart;
    heart.addEventListener('click', event => {
        reviewRate.dataset.heart = heartValue;
        window.localStorage.setItem(index, heartValue);
        heroesRates[index].innerHTML = heartValue;
    })
})






