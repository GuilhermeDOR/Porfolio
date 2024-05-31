const allProjects = document.querySelectorAll('.project');
const projectDiv = document.getElementById('project-page');
const projectImg = document.getElementById('placed-project');
const projectTittle = document.getElementById('project-tittle');
const projectTxt = document.getElementById('project-text');
const projectLink = document.getElementById('project-link');

//
// TODA FUNCIONALIDADE DE MOSTRAR MAIS PROJETOS NA PAGINA
const loadMoreButton = document.getElementById('more-projects-button');
const extraProjectsGrid = document.getElementById('grid-container-more-projects');

//
// Função alterada para novo modelo de abertura de projetos extras
//
const projectsToAppear = [
    { src: './img/printWeCare.jpg', id: 'wecare', alt: 'Projeto-We-Care' },
    { src: './img/printEnergy.jpg', id: 'energy', alt: 'Projeto-Site-Recompensas' },
    { src: './img/printSiteMobile.jpg', id: 'easyshopping', alt: 'Projeto-Easy-Shopping' },
    { src: './img/fundoProjetoFuturo.jpg', id: '', alt: '' },
    { src: './img/fundoProjetoFuturo.jpg', id: '', alt: '' },
]

// função para abrir mais projetos
let myProjects = ''
function loadMoreProjects(array) {
    myProjects = '';

    array.forEach(projeto => {
        myProjects += `
            <div class="project">
                <img 
                    id="${projeto.id}" 
                    class="project-spoiler" 
                    src="${projeto.src}" 
                    alt="${projeto.alt}" 
                />
            </div>
        `;
    })
    extraProjectsGrid.innerHTML = myProjects;
    extraProjectsGrid.style.display = 'grid';

    // Reinicializa os event listeners para os novos projetos
    const newProjects = extraProjectsGrid.querySelectorAll('.project');
    newProjects.forEach(proj => proj.addEventListener('click', openProject));

}
loadMoreButton.addEventListener('click', () => loadMoreProjects(projectsToAppear))

//
// função com switch case para identificar projeto e repassar informação a tela de projeto aberto
function openProject(event) {
    const openedProject = event.target

    projectDiv.style.visibility = 'visible';

    switch (openedProject.id) {
        case 'starbucks':
            projectImg.src = './img/printStarbucks.jpg';
            projectTittle.innerHTML = 'Desafio Starbucks';
            projectTxt.innerHTML = 'Este foi meu primeiro projeto sobre programação. O fiz durante lives especiais no YouTube do canal Rodolfo Mori, que seria mais tarde meu professor ou sócio, como ele nos chama, em seu curso.';
            projectLink.href = 'https://guilhermedor.github.io/Starbucks-Vid.Aula/';
            break;

        case 'wecare':
            projectImg.src = './img/printWeCare.jpg';
            projectTittle.innerHTML = 'Desafio CSS - um';
            projectTxt.innerHTML = 'Este foi um dos primeiro projetos que fiz tendo como foco o aprendizado e uso da técnologia CSS.';
            projectLink.href = 'https://guilhermedor.github.io/Desafio-WeCare/';
            break;

        case 'energy':
            projectImg.src = './img/printEnergy.jpg';
            projectTittle.innerHTML = 'Desafio CSS - Dois';
            projectTxt.innerHTML = 'Este foi meu segundo projeto focado em aprender CSS, para conhecer mais sobre esta técnologia.';
            projectLink.href = 'https://guilhermedor.github.io/Desafio-Reward/';
            break;

        case 'mario':
            projectImg.src = './img/printMario.jpg';
            projectTittle.innerHTML = 'Projeto Mario Brothers';
            projectTxt.innerHTML = 'Um pequeno projeto de Landing page, onde aprendi algumas técnicas muito úteis de posicionamento, sequencia de acontecimentos e posicionamento dos elementos na tela. E também algumas coisas sobre o que ter em uma pagina.';
            projectLink.href = 'https://guilhermedor.github.io/Projeto-Mario-Brothers/';
            break;

        case 'easyshopping':
            projectImg.src = './img/printSiteMobile.jpg';
            projectTittle.innerHTML = 'Desafio EasyShopping';
            projectTxt.innerHTML = 'Este projeto foi em especial para aprender sobre responsividade de alguns elementos da página.';
            projectLink.href = 'https://guilhermedor.github.io/Desafio-MobileShop/';
            break;

        case 'converter':
            projectImg.src = './img/printConversor.jpg';
            projectTittle.innerHTML = 'Desafio Conversor de Moedas';
            projectTxt.innerHTML = 'Neste projeto foi feito um simples conversor de moedas, nele há mais a compreensão do sistema usado para os cálculos da conversão, sem informações em tempo real.';
            projectLink.href = 'https://guilhermedor.github.io/Desafio-Conversor-de-Moedas/';
            break;

        case 'sorter':
            projectImg.src = './img/printSorteador.jpg';
            projectTittle.innerHTML = 'Desafio Sorteador';
            projectTxt.innerHTML = 'Um pequeno projeto de um sorteador de um número entre outros dois. Focado em entender e usar o math.random';
            projectLink.href = 'https://guilhermedor.github.io/Desafio-Sorteador/';
            break;

        default:
            projectDiv.style.visibility = 'hidden';
            break;
    }
}
allProjects.forEach(proj => proj.addEventListener('click', openProject));

//
// função para fechar projeto aberto
const closeButton = document.getElementById('close-button');
function closing() {
    projectDiv.style.visibility = 'hidden';
    projectImg.src = '';
    projectTittle.innerHTML = '';
    projectTxt.innerHTML = '';
    projectLink.href = '';
}
closeButton.addEventListener('click', closing)

//
// Expandir medias sociais com clique na logo
const myLogo = document.getElementById('my-logo')
const socialBg = document.querySelector('.sec-social-medias')

function expandSocialMedias() {
    socialBg.classList.toggle('expanded');
    myLogo.classList.toggle('expanded');
}

//
// Rola a página para baixo até os projetos
const projectosButton = document.querySelector('.button-slide-to-proj');

projectosButton.addEventListener('click', () => {
    scroll({ top: window.innerHeight, behavior: 'smooth' });
})

const upArrow = document.querySelector('.up-arrow')

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

upArrow.addEventListener('click', scrollToTop)