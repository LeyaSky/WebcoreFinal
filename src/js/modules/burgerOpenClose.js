export function openBurger(){
    const burgerOpenBtn = document.querySelector('.nav-header__burger');
    burgerOpenBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const asideMenu = document.querySelector('.aside');
        asideMenu.classList.add('aside-openedBurger');
        blurMainContent();
    })
};
openBurger();



export function closeBurger(){
    document.addEventListener('click',(e) =>{
        if(e.target.id == 'burger-close-img' || e.target.id == 'header__hide-content' ){
           const  aside = document.querySelector('.aside');
           aside.classList.remove('aside-openedBurger');
           unBlurMainContent();
        }
    });
};
closeBurger();

export function blurMainContent(){
    const documentBody = document.querySelector('body');
    documentBody.classList.add('lock-content');
    const bluredBckg = document.querySelector('.header__hide-content');
    // bluredBckg.style.visibility = 'visible';
    bluredBckg.classList.add('visible')
}

export function unBlurMainContent(){
    const documentBody = document.querySelector('body');
    documentBody.classList.remove('lock-content');
    const bluredBckg = document.querySelector('.header__hide-content');
    // bluredBckg.style.visibility = 'hidden';
    bluredBckg.classList.remove('visible');
}

export function AsideHeight(){
    document.addEventListener('DOMContentLoaded', () => {
        if(window.innerWidth > 1349){
            console.log(document.body.scrollHeight);
            const height = document.body.scrollHeight;
            const aside = document.querySelector('.aside');
            aside.style.height = `${height}px `;
        }else{
            console.log('mo');
        }
    });
};
AsideHeight();