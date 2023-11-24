const sideNav = document.querySelector("#my-sidenav");
const openBtn = document.querySelector("#open-btn");
const closeBtn = document.querySelector("#close-btn");
const list = document.querySelector(".desktop-display");

openBtn.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);

function openNav() {
    sideNav.classList.add("active");
    list.style.display = "block"
}

function closeNav() {
    sideNav.classList.remove("active");
}

/*const cards = [
    {
        id: 1,
        title: "The Dark Knight",
        image: "assets/affiche-large-batman_1.jpg",
        alt: "Affiche The Dark Knight",
        categorie: "Drame",
    },
    {
        id: 2,
        title: "The hobbit",
        image: "assets/affiche-large-hobbit_1_1.jpg",
        alt: "Affiche The Hobbit",
        categorie: "Fantastique",
    },
    {
        id: 3,
        title: "Harry Potter",
        image: "assets/affiche-large-batman_1.jpg",
        alt: "assets/affiche-harry-potter-large_2.jpg",
        categorie: "Policier",
    },
    {
        id: 4,
        title: "the dark knight",
        image: "assets/affiche-large-batman_1.jpg",
        alt: "affiche the dark knight",
        categorie: "drame",
    },
    {
        id: 5,
        title: "the dark knight",
        image: "assets/affiche-large-batman_1.jpg",
        alt: "affiche the dark knight",
        categorie: "drame",
    },
    {
        id: 6,
        title: "the dark knight",
        image: "assets/affiche-large-batman_1.jpg",
        alt: "affiche the dark knight",
        categorie: "drame",
    }
];*/

