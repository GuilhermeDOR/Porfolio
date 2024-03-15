const buttonOne = document.getElementById('b-one');
const buttonTwo = document.getElementById('b-two');
const buttonThree = document.getElementById('b-three');

const divDivs = document.querySelectorAll('.div-divs')

const section = document.querySelectorAll('section');
const secZero = document.querySelector('#sec-welcome');
const secOne = document.querySelector('#sec-i-am');
const secTwo = document.querySelector('#sec-my-skills');
const secThree = document.querySelector('#sec-social-medias');

const navLines = document.getElementById('menu-img');
const navMask = document.querySelector('.menu-mask')
const nav = document.querySelector('.nav-section');

function openCloseNav() {

    const computedWidth = window.getComputedStyle(navMask).getPropertyValue('width')
    if (computedWidth === '0px') {
        navMask.style.visibility = 'visible';
        navMask.style.transition = '0.2s';
        navMask.style.width = '100%';

        setTimeout(() => {
            nav.style.transition = '0.2s'
            nav.style.transform = 'translateX(0)'
        }, 300);

    } else {
        nav.style.transition = '0.2s'
        nav.style.transform = 'translateX(-100%)'

        setTimeout(() => {
            navMask.style.visibility = 'hidden';
            navMask.style.transition = '0.2s';
            navMask.style.width = '0';
        }, 300);
    }
}

navLines.addEventListener('click', openCloseNav)

// ATIVAR FUNÇÕES DOS DOIS PRIMEIROS BOTÕES
const socialImg = document.querySelectorAll('.social-img');
function buttonSelected(event) {
    const clickedButton = event.target;
    const mainDiv = document.querySelector('main');

    if (window.matchMedia("(max-width: 866px) and (max-height: 932px)").matches) {

        if (clickedButton === buttonOne) {

            setTimeout(() => {
                divDivs.forEach(secdiv => secdiv.style.display = 'none');
                section.forEach(sec => sec.style.display = 'none');
            }, 150);

            setTimeout(() => {
                mainDiv.style.minHeight = '5vh';
            }, 250);

            setTimeout(() => {
                mainDiv.style.minHeight = '100vh';
            }, 600);

            setTimeout(() => {
                secOne.style.display = 'flex';
                window.scrollTo({ top: 0 });
            }, 1000);
        }

        if (clickedButton === buttonTwo) {

            setTimeout(() => {
                divDivs.forEach(secdiv => secdiv.style.display = 'none');
                section.forEach(sec => sec.style.display = 'none');
            }, 150);

            setTimeout(() => {
                mainDiv.style.minHeight = '5vh';
            }, 250);

            setTimeout(() => {
                mainDiv.style.minHeight = '100vh';
            }, 600);

            setTimeout(() => {
                secTwo.style.display = 'flex';
                window.scrollTo({ top: 0 });
            }, 1000);
        }

    } else {

        if (clickedButton === buttonOne) {

            setTimeout(() => {
                divDivs.forEach(secdiv => secdiv.style.display = 'none');
                section.forEach(sec => sec.style.display = 'none');
            }, 200);

            setTimeout(() => {
                mainDiv.style.height = '15%';
            }, 150);

            setTimeout(() => {
                mainDiv.style.height = '90%';
            }, 900);

            setTimeout(() => {
                secOne.style.display = 'flex';
            }, 1100);

        }

        if (clickedButton === buttonTwo) {

            setTimeout(() => {
                divDivs.forEach(secdiv => secdiv.style.display = 'none');
                section.forEach(sec => sec.style.display = 'none');
            }, 200);

            setTimeout(() => {
                mainDiv.style.height = '15%';
            }, 150);

            setTimeout(() => {
                mainDiv.style.height = '90%';
            }, 900);

            setTimeout(() => {
                secTwo.style.display = 'flex';
            }, 1100);

        }

        if (clickedButton === buttonThree) {

            let computedStyle = window.getComputedStyle(secThree);

            if (computedStyle.getPropertyValue('display') === 'none') {

                setTimeout(() => {
                    secThree.style.display = 'flex';
                }, 200);

                setTimeout(() => {
                    secThree.style.height = 'auto';
                }, 300);

                setTimeout(() => {
                    socialImg.forEach(img => img.style.height = '90%');
                }, 350);


            } else if (computedStyle.getPropertyValue('display') === 'flex') {

                setTimeout(() => {
                    socialImg.forEach(img => img.style.height = '0');
                }, 200);

                setTimeout(() => {
                    secThree.style.height = '0';
                }, 450);

                setTimeout(() => {
                    secThree.style.display = 'none';
                }, 550);
            }
        }
    }
}

//ABRIR LINKS DE REDES SOCIAIS
function openingSocial() {

    let computedStyle = window.getComputedStyle(secThree);

    if (computedStyle.getPropertyValue('visibility') === 'hidden') {

        setTimeout(() => {
            secThree.style.visibility = 'visible';
        }, 200);

        setTimeout(() => {
            secThree.style.height = '25%';
        }, 300);

        setTimeout(() => {
            socialImg.forEach(img => img.style.height = '90%');
        }, 350);


    } else if (computedStyle.getPropertyValue('visibility') === 'visible') {

        setTimeout(() => {
            socialImg.forEach(img => img.style.height = '0');
        }, 200);

        setTimeout(() => {
            secThree.style.height = '0';
        }, 450);

        setTimeout(() => {
            secThree.style.visibility = 'hidden';
        }, 550);
    }
}

buttonOne.addEventListener('click', buttonSelected);
buttonTwo.addEventListener('click', buttonSelected);
buttonThree.addEventListener('click', openingSocial);