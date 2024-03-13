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
            projectImg.src = './img/printStarbucks.jpg';
            projectTittle.innerHTML = 'Desafio Starbucks';
            projectTxt.innerHTML = 'Este foi meu primeiro projeto finalizado usando programação, e por mais simples que seja, apenas usando poucos elementos de html, css e javascript, me ajudou a ver o potencial do curso Devclub em me ensinar.';
            projectLink.href = 'https://guilhermedor.github.io/Starbucks-Vid.Aula/';
            break;

        // case 'apresentacao':
        //     projectImg.src = '';
        //     projectTittle.innerHTML = 'Desafio Apresentação HTML';
        //     projectTxt.innerHTML = '';
        //     projectLink.href = '';
        //     break;

        case 'wecare':
            projectImg.src = './img/printWeCare.jpg';
            projectTittle.innerHTML = 'Desafio CSS - um';
            projectTxt.innerHTML = 'Este foi um dos primeiro projetos que fiz usando como foco a técnologia CSS, para aprendizado sobre ela.';
            projectLink.href = 'https://guilhermedor.github.io/Desafio-WeCare/';
            break;

        case 'energy':
            projectImg.src = './img/printEnergy.jpg';
            projectTittle.innerHTML = 'Desafio CSS - Dois';
            projectTxt.innerHTML = 'Este foi meu segundo projeto focado em CSS, para aprender mais sobre esta técnologia.';
            projectLink.href = 'https://guilhermedor.github.io/Desafio-Reward/';
            break;

        case 'mario':
            projectImg.src = './img/printMario.jpg';
            projectTittle.innerHTML = 'Projeto Mario Brothers';
            projectTxt.innerHTML = 'Um pequeno projeto de Landing page, onde aprendi algumas técnicas muito úteis de posicionamento, sequencia de acontecimentos e posicionamento dos elementos na tela. E também algumas coisas sobre o que ter em uma pagina.';
            projectLink.href = '';
            break;

        // case 'unu':
        //     projectImg.src = '';
        //     projectTittle.innerHTML = 'Projeto Discord Unu';
        //     projectTxt.innerHTML = '';
        //     projectLink.href = '';
        //     break;

        case 'easyshopping':
            projectImg.src = './img/printSiteMobile.jpg';
            projectTittle.innerHTML = 'Desafio EasyShopping';
            projectTxt.innerHTML = 'Este projeto foi em especial para aprender sobre responsividade, logo após terminalo, fui desafiado e deixar mais responsivas as paginas do primeiro e segundo desafio CSS';
            projectLink.href = 'https://guilhermedor.github.io/Desafio-MobileShop/';
            break;

        case 'converter':
            projectImg.src = './img/printConversor.jpg';
            projectTittle.innerHTML = 'Desafio Conversor de Moedas';
            projectTxt.innerHTML = 'Neste projeto foi feito um simples conversor de moedas, nele ah mais a compreensão do sistema usado para os calculos da conversão, sem muitas informações em tempo real.';
            projectLink.href = 'https://guilhermedor.github.io/Desafio-Conversor-de-Moedas/';
            break;

        case 'sorter':
            projectImg.src = './img/printSorteador.jpg';
            projectTittle.innerHTML = 'Desafio Sorteador';
            projectTxt.innerHTML = 'Este aqui foi um projeto de um sorteador de número, entre um numero e outro';
            projectLink.href = 'https://guilhermedor.github.io/Desafio-Sorteador/';
            break;

        default:
            alert('Projeto mal carregado')
            break;

    }

}

function close() {
    projectDiv.style.visibility = 'hidden';
}

closeButton.addEventListener('click', close)

allProjects.forEach(proj => proj.addEventListener('click', openProject));