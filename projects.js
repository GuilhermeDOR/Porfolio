const allProjects = document.querySelectorAll('.project');
const projectDiv = document.getElementById('project-page');
const projectImg = document.getElementById('placed-project');
const projectTittle = document.getElementById('project-tittle');
const projectTxt = document.getElementById('project-text');
const projectLink = document.getElementById('project-link');
const closeButton = document.getElementById('close-button');

function openProject(event) {
    const openedProject = event.target

    projectDiv.style.visibility = 'visible';

    switch (openedProject.id) {
        case 'starbucks':
            console.log('carregado')
            projectImg.src = './img/printStarbucks.png';
            projectTittle.innerHTML = 'Desafio Starbucks';
            projectTxt.innerHTML = 'Este foi meu primeiro projeto finalizado usando programação, e por mais simples que seja, apenas usando poucos elementos de html, css e javascript, me ajudou a ver o potencial do curso Devclub em me ensinar.';
            projectLink.href = '';
            break;

        // case 'apresentacao':
        //     projectImg.src = '';
        //     projectTittle.innerHTML = 'Desafio Apresentação HTML';
        //     projectTxt.innerHTML = '';
        //     projectLink.href = '';
        //     break;

        case 'wecare':
            projectImg.src = './img/printWeCare.png';
            projectTittle.innerHTML = 'Desafio Um-CSS';
            projectTxt.innerHTML = 'Este foi um dos primeiro projetos que fiz usando como foco a técnologia CSS, para aprendizado sobre ela.';
            projectLink.href = 'https://guilhermedor.github.io/Desafio-WeCare/';
            break;

        case 'energy':
            projectImg.src = './img/printEnergy.png';
            projectTittle.innerHTML = 'Desafio Dois-CSS';
            projectTxt.innerHTML = 'Este foi meu segundo projeto focado em CSS, para aprender mais sobre esta técnologia.';
            projectLink.href = 'https://guilhermedor.github.io/Desafio-Reward/';
            break;

        case 'mario':
            projectImg.src = './img/MarioPrint.png';
            projectTittle.innerHTML = 'Projeto Mario Brothers';
            projectTxt.innerHTML = 'Este foi um projeto um pouco mais trabalhado, e foi feito um uso maior de CSS e Javascript do que meus anteriores projetos.';
            projectLink.href = '';
            break;

        // case 'unu':
        //     projectImg.src = '';
        //     projectTittle.innerHTML = 'Projeto Discord Unu';
        //     projectTxt.innerHTML = '';
        //     projectLink.href = '';
        //     break;

        case 'easyshopping':
            projectImg.src = './img/printSiteMobile.png';
            projectTittle.innerHTML = 'Desafio EasyShopping';
            projectTxt.innerHTML = 'Este projeto foi em especial para aprender sobre responsividade, logo após terminalo, fui desafiado e deixar mais responsivas as paginas do primeiro e segundo desafio CSS';
            projectLink.href = 'https://guilhermedor.github.io/Desafio-MobileShop/';
            break;

        default:
            break;

    }

}

function close() {
    projectDiv.style.visibility = 'hidden';
}

closeButton.addEventListener('click', close)

allProjects.forEach(proj => proj.addEventListener('click', openProject));