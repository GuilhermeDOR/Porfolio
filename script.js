const buttonOne = document.getElementById('b-one');
const buttonTwo = document.getElementById('b-two');
const buttonThree = document.getElementById('b-three');

const divDivs = document.querySelectorAll('.div-divs')

const section = document.querySelectorAll('section');
const secZero = document.querySelector('#sec-welcome');
const secOne = document.querySelector('#sec-i-am');
const secTwo = document.querySelector('#sec-my-skills');
const secThree = document.querySelector('#sec-social-medias');

function buttonSelected(event) {
    const clickedButton = event.target;
    const mainDiv = document.querySelector('main')

    if (clickedButton === buttonOne) {

        setTimeout(() => {
            divDivs.forEach(secdiv => secdiv.style.display = 'none');
            section.forEach(sec => sec.style.display = 'none');
        }, 130);

        setTimeout(() => {
            mainDiv.style.height = '15%';
        }, 150);

        setTimeout(() => {
            mainDiv.style.height = '100%';
        }, 900);

        setTimeout(() => {
            secOne.style.display = 'inline-flex';
        }, 1100);

    }

    if (clickedButton === buttonTwo) {

        setTimeout(() => {
            divDivs.forEach(secdiv => secdiv.style.display = 'none');
            section.forEach(sec => sec.style.display = 'none');
        }, 140);

        setTimeout(() => {
            mainDiv.style.height = '15%';
        }, 150);

        setTimeout(() => {
            mainDiv.style.height = '100%';
        }, 900);

        setTimeout(() => {
            secTwo.style.display = 'inline-flex';
        }, 1100);

    }

    if (clickedButton === buttonThree) {

        setTimeout(() => {
            divDivs.forEach(secdiv => secdiv.style.display = 'none');
            section.forEach(sec => sec.style.display = 'none');
        }, 130);

        setTimeout(() => {
            mainDiv.style.height = '15%';
        }, 150);

        setTimeout(() => {
            mainDiv.style.height = '100%';
        }, 900);

        setTimeout(() => {
            secThree.style.display = 'inline-flex';
        }, 1100);

    }
}

buttonOne.addEventListener('click', buttonSelected);
buttonTwo.addEventListener('click', buttonSelected);
buttonThree.addEventListener('click', buttonSelected);