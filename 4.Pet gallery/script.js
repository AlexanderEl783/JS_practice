const list = [
    {
        id: 1,
        name: "Charlie",
        category: "cat",
        img: "./images/image-1.jpg"
    },
    {
        id: 2,
        name: "Max",
        category: "cat",
        img: "./images/image-2.jpg"
    },
    {
        id: 3,
        name: "Bella",
        category: "cat",
        img: "./images/image-3.jpg"
    },
    {
        id: 4,
        name: "Luna",
        category: "cat",
        img: "./images/image-4.jpg"
    },
    {
        id: 5,
        name: "Coco",
        category: "cat",
        img: "./images/image-5.jpg"
    },
    {
        id: 6,
        name: "Oscar",
        category: "dog",
        img: "./images/image-6.jpg"
    },
    {
        id: 7,
        name: "Teddy",
        category: "dog",
        img: "./images/image-7.jpg"
    },
    {
        id: 8,
        name: "Molly",
        category: "dog",
        img: "./images/image-8.jpg"
    },
    {
        id: 9,
        name: "Frankie",
        category: "dog",
        img: "./images/image-9.jpg"
    },
    {
        id: 10,
        name: "Daisy",
        category: "dog",
        img: "./images/image-10.jpg"
    },
    {
        id: 11,
        name: "Alfie",
        category: "hamster",
        img: "./images/image-11.jpg"
    },
    {
        id: 12,
        name: "Lola",
        category: "hamster",
        img: "./images/image-12.jpg"
    },
];

const sectionCenter = document.querySelector('.section-center');
const filterBtns = document.querySelectorAll('.filter-btn');

window.addEventListener('DOMContentLoaded', function () {
    displayPetsPhotos(list);
});

filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const category = e.currentTarget.dataset.id;
        const petsCategory = list.filter(function (listItem) {
            if (listItem.category === category) {
                return listItem;
            }
        });
        if (category === 'all') {
            displayPetsPhotos(list);
        } else {
            displayPetsPhotos(petsCategory);
        }
    })
})

function displayPetsPhotos(listItems) {
    let displayPets = listItems.map(function (item) {
        return `<article class="pets">
        <img src="${item.img}" class="photo" alt="${item.name}">
      </article>`;
    });
    displayPets = displayPets.join("");
    sectionCenter.innerHTML = displayPets;
}


// function displayPetlist() {
//     let displayPet = list.map(function (item) {
//         console.log(item);
//         return `<article class="pets">
//         <img src="${item.img}" class="photo" alt="${item.name}">
//       </article>`
//     });
//     displayPet = displayPet.join("");
//     sectionCenter.innerHTML = displayPet;
// }