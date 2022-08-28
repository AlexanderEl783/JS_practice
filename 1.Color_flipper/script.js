let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let btn = document.getElementById('btn');
let btnOne = document.getElementById('btnOne');
let btnTwo = document.getElementById('btnTwo');
let btnThree = document.getElementById('btnThree');
let color = document.getElementById('color');
let colorOne = document.getElementById('colorOne');
let colorTwo = document.getElementById('colorTwo');
let colorThree = document.getElementById('colorThree');

btn.addEventListener('click', function () {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[randomColor()];
        color.textContent = hexColor;
        document.body.style.backgroundColor = hexColor;
    }
});

btnOne.addEventListener('click', function () {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[randomColor()];
        colorOne.textContent = hexColor;
        btnOne.style.backgroundColor = hexColor;
    }
});

btnTwo.addEventListener('click', function () {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[randomColor()];
        colorTwo.textContent = hexColor;
        btnTwo.style.backgroundColor = hexColor;
    }
});

btnThree.addEventListener('click', function () {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[randomColor()];
        colorThree.textContent = hexColor;
        btnThree.style.backgroundColor = hexColor;
    }
});

function randomColor() {
    return Math.floor(Math.random() * hex.length);
}
