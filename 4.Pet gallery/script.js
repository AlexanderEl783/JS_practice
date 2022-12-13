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
const container = document.querySelector('.btn-container');

window.addEventListener('DOMContentLoaded', function () {
    displayPetsPhotos(list);
    displayButtons();
    displayOptions();
});

function displayPetsPhotos(listItems) {
    let displayPets = listItems.map(function (item) {
        return `<article class="pets"><img src="${item.img}" class="photo" alt="${item.name}">
      </article>`;
        //   add delete buttons
        //     return `<div class="photo-container"><article class="pets">
        //     <img src="${item.img}" class="photo" alt="${item.name}">
        //   </article><span class="material-symbols-outlined delete-btn">
        //   delete</span></div>`;
    });
    displayPets = displayPets.join("");
    sectionCenter.innerHTML = displayPets;
}

function displayButtons() {
    const categories = list.reduce(function (values, item) {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    }, ['all']
    );
    const categoryBtns = categories.map(function (category) {
        return ` <button class="filter-btn" type="button" data-id="${category}">${category}</button>`
    })
        .join("");
    container.innerHTML = categoryBtns;

    const filterBtns = container.querySelectorAll('.filter-btn');
    filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            const category = e.currentTarget.dataset.id;
            const listCategory = list.filter(function (listItem) {
                if (listItem.category === category) {
                    return listItem;
                }
            });
            if (category === 'all') {
                displayPetsPhotos(list);
            } else {
                displayPetsPhotos(listCategory);
            }
        })
    })
}

// delete btns
// const deleteBtn = document.querySelectorAll('.delete-btn');
// deleteBtn.forEach(function (btn) {};

// options 
function displayOptions() {
    const optionsCategory = list.reduce(function (values, item) {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    }, []
    );
    const options = optionsCategory.map(function (item) {
        return `<option value="${item}" data-id="${item}">${item}</option>`
    })
        .join("");
    select.innerHTML = options;
}

const select = document.getElementById('select');
const btnAdd = document.getElementById('add-btn');
const urlId = document.getElementById('urlId');
const newCategoryDiv = document.getElementById('newCategory-div');
const newCategorytId = document.getElementById('newCategorytId');
const newCategoryBtn = document.getElementById('new-category-btn');

newCategoryBtn.addEventListener('click', function () {
    newCategoryDiv.classList.toggle('hide-category');
    select.classList.toggle('hide-category');
})

btnAdd.addEventListener('click', () => {
    let Object = {};
    Object.id = list.length + 1;
    Object.img = urlId.value;

    if (!select.classList.contains('hide-category')) {
        Object.category = select.value;
    }
    else {
        Object.category = newCategorytId.value;
    };
    list.push(Object);

    displayButtons();
    displayPetsPhotos(list);
    newCategoryDiv.classList.add('hide-category');
    select.classList.remove('hide-category');
    console.log(list);
    displayOptions();
});
