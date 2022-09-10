const quotes = [
    {
        quote: 1,
        author: 'Theodore Roosevelt',
        about: 'Theodore Roosevelt Jr. (October 27, 1858 – January 6, 1919), often referred to as Teddy or by his initials, T. R., was an American politician, statesman, soldier, conservationist, naturalist, historian, and writer who served as the 26th president of the United States from 1901 to 1909.',
        text: 'Big jobs usually go to the men who prove their ability to outgrow small ones'
    },

    {
        quote: 2,
        author: 'William Butler Yeats',
        about: 'William Butler Yeats (13 June 1865 – 28 January 1939) was an Irish poet, dramatist, writer and one of the foremost figures of 20th-century literature.',
        text: 'I have believed the best of every man. And find that to believe is enough to make a bad man show him at his best, or even a good man swings his lantern higher'
    },

    {
        quote: 3,
        author: 'Confucius',
        about: 'Confucius was an influential Chinese philosopher, teacher and political figure.',
        text: 'A great man is hard on himself; a small man is hard on others'
    },

    {
        quote: 4,
        author: 'Lev Tolstoy',
        about: 'Leo Tolstoy (September 9, 1828-November 20, 1910) was a Russian writer, best known for his epic novels. Born into an aristocratic Russian family, Tolstoy wrote realist fiction and semi-autobiographical novels before shifting into more moral and spiritual works.',
        text: 'Live your life in such a way that you neither hide nor have a wish to display your life to people'
    },

    {
        quote: 5,
        author: 'Diogenes',
        about: 'Diogenes, also known as Diogenes the Cynic, was a Greek philosopher. He was one of the philosophers who originated the Cynic philosophy, a way of thinking that advocated the rejection of luxury and promoted “living in virtue”. ',
        text: 'A wise man becomes free when he is ready to die at any moment'
    },

    {
        quote: 6,
        author: 'Robert Louis Stevenson',
        about: `Robert Louis Stevenson (born Robert Lewis Balfour Stevenson; 13 November 1850 – 3 December 1894) was a Scottish novelist, essayist, poet and travel writer. He is best known for works such as Treasure Island, Strange Case of Dr Jekyll and Mr Hyde, Kidnapped and A Child's Garden of Verses.`,
        text: "Don't judge each day by the harvest you reap but by the seeds that you plant"
    },

    {
        quote: 7,
        author: 'Eleanor Roosevelt',
        about: 'Anna Eleanor Roosevelt was born on October 11, 1884, in Manhattan, New York City, to socialites Anna Rebecca Hall and Elliott Roosevelt. From an early age she preferred to be called by her middle name, Eleanor. Through her father, she was a niece of President Theodore Roosevelt.',
        text: 'The future belongs to those who believe in the beauty of their dreams'
    },

    {
        quote: 8,
        author: 'Benjamin Franklin',
        about: 'One of the leading figures of early American history, Benjamin Franklin (1706-1790) was a statesman, author, publisher, scientist, inventor and diplomat. Born into a Boston family of modest means, Franklin had little formal education. He went on to start a successful printing business in Philadelphia and grew wealthy.',
        text: 'Tell me and I forget. Teach me and I remember. Involve me and I learn'
    },
]

const author = document.getElementById('author');
const info = document.getElementById('info');
const id = document.getElementById('quote_span');
const about = document.getElementById('about');
const aboutDescription = document.querySelector('.about-description');

const overflow = document.querySelector('.overflow');
const closeBtn = document.querySelector('.close-btn');

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
    aboutDescription.textContent = item.about;
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
});

about.addEventListener('click', () => {
    overflow.classList.add('show-about');

});

closeBtn.addEventListener('click', () => {
    overflow.classList.remove('show-about');
})