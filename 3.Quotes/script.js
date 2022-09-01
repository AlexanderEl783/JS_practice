const quotes = [
    {
        quote: 1,
        author: 'Theodore Roosevelt',
        text: 'Big jobs usually go to the men who prove their ability to outgrow small ones.'
    },

    {
        quote: 2,
        author: 'William Butler Yeats',
        text: 'I have believed the best of every man. And find that to believe is enough to make a bad man show him at his best, or even a good man swings his lantern higher.'
    },

    {
        quote: 3,
        author: 'Confucius',
        text: 'A great man is hard on himself; a small man is hard on others.'
    },

    {
        quote: 4,
        author: 'Lev Tolstoy',
        text: 'Live your life in such a way that you neither hide nor have a wish to display your life to people.'
    },

    {
        quote: 5,
        author: 'Diogenes',
        text: 'A wise man becomes free when he is ready to die at any moment.'
    },

    {
        quote: 6,
        author: 'Robert Louis Stevenson',
        text: "Don't judge each day by the harvest you reap but by the seeds that you plant."
    },

    {
        quote: 7,
        author: 'Eleanor Roosevelt',
        text: 'The future belongs to those who believe in the beauty of their dreams.'
    },

    {
        quote: 8,
        author: 'Benjamin Franklin',
        text: 'Tell me and I forget. Teach me and I remember. Involve me and I learn.'
    },
]

const author = document.getElementById('author');
const info = document.getElementById('info');
const id = document.getElementById('quote_span');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;

showQuotes();

function showQuotes() {
    let item = quotes[currentItem];
    author.textContent = item.author;
    info.textContent = item.text;
    quote_span.textContent = item.quote;
};

nextBtn.addEventListener('click', () => {
    currentItem++;
    if (currentItem > quotes.length - 1) {
        currentItem = 0;
    }
    showQuotes();
    console.log(currentItem);
});

prevBtn.addEventListener('click', () => {
    currentItem--;
    if (currentItem < 0) {
        currentItem = quotes.length - 1;
    }
    showQuotes();
    console.log(currentItem);
});

randomBtn.addEventListener('click', () => {
    let randomNumber;

    do {
        randomNumber = Math.floor(Math.random() * quotes.length);
    }
    while (randomNumber == currentItem);

    currentItem = randomNumber;

    showQuotes();
    console.log(currentItem);
});
