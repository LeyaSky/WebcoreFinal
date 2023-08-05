import { blurMainContent, unBlurMainContent } from "./burgerOpenClose";

export function showModal(){
    const feedbackBtn = document.querySelector('.nav-header__chat');
    feedbackBtn.addEventListener('click', (e) =>{
        const modalFeedback = document.querySelector('.feedback');
        modalFeedback.classList.add('modal-openedModal');
        blurMainContent();
    });

    const callModalBtn = document.querySelector('.nav-header__call');
    callModalBtn.addEventListener('click', (e) =>{
        const modalCall = document.querySelector('.call');
        modalCall.classList.add('modal-openedModal');
        blurMainContent();
    })

};
showModal();

export function closeModal(){
    document.addEventListener('click',(e) => {
        if(e.target.id == 'closeBtn-callModal' ||e.target.id == 'header__hide-content' ){
            const modalCall = document.querySelector('.call');
            modalCall.classList.remove('modal-openedModal');
            unBlurMainContent();
        }
    })
};
closeModal();