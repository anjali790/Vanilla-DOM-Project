const createTask = document.querySelector('.taskBtn');
const popUp = document.querySelector('.pop-Up');
const movieName = document.querySelector('.movieName');
const movieLink = document.querySelector('.imgLink');
const imdbRating = document.querySelector('.rating');
const category = document.querySelector('.category');
const trailerLink = document.querySelector('.trailerLink');
const actorName = document.querySelector('.actorName');
const directorName = document.querySelector('.directorName');
const submit = document.querySelector('.submit');
const cross = document.querySelector('.closeBtn');
const movieBox = document.querySelector('.movieBox');


createTask.addEventListener('click', () => {
    popUp.style.display = 'block';
});

submit.addEventListener('click', (e) => {
    e.preventDefault();
    popUp.style.display = 'none';

    const movieInfo = document.createElement('div');
    movieInfo.classList.add('movieInfo')
    movieInfo.innerHTML = `<h2>Movie Name:- ${movieName.value}</h2>
                            <p>Movie Image Link:-<a href="#"> ${movieLink.value}</a> </p>
                            <p>Imbd:- ${imdbRating.value}</p>
                            <p>Category:- ${category.value}</p>
                            <p>Trailer Link:-<a href="#"> ${trailerLink.value}</a> </p>
                            <p>Actors Name:- ${actorName.value}</p>
                            <p>Director Name:- ${directorName.value}</p>`
    movieBox.append(movieInfo);
});

cross.addEventListener('click', (e) => {
    cross.parentElement.remove();
});