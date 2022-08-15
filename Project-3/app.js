// local review data:-
const reviews = [
    {
        id: 1,
        name: 'Anna Johnson',
        job: 'Web Developer',
        img: '',
        text:  "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: 'Peter Jones',
        job: 'Web Designer',
        img: 'person2.jpeg',
        text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: 'Bill Anderson',
        job: 'Intern',
        img: 'person3.jpeg',
        text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        name: 'Susan Smith',
        job: 'Designer',
        img: 'person4.jpeg',
        text:  "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
    },

];

//select items:-
const img = document.querySelector('#img');
const author = document.querySelector('#author');
const job = document.querySelector('#job');
const info = document.querySelector('#info');
const nextBtn = document.querySelector('.nextBtn')
const prevBtn = document.querySelector('.prevBtn');
const randomBtn = document.querySelector('.randomBtn');


//set starting item:-
let currentItem = 1;

//set initial item:-
window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});


//show person based on item:-
function showPerson(person){
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
};

// show next person
nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
});

// show prev person
prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

// show random person
randomBtn.addEventListener("click", function () {
    console.log("hello");
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});


