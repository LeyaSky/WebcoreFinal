import { blurMainContent, unBlurMainContent } from "./burgerOpenClose";

export function showModal(){
    const feedbackBtn = document.querySelector('.nav-header__chat');
    const feedbackBtnMobile = document.querySelector('.footer-aside__chat');
    document.addEventListener('click', (e) => {
        if(e.target.id == "modal-feedback-img"){
            e.preventDefault();
            openActionFeedbackMobile();
        }
    })
    feedbackBtn.addEventListener('click', () =>{
        openActionFeedbackMobile();
    });

    const callModalBtn = document.querySelector('.nav-header__call');
    const callBtnMobile = document.querySelector('.footer-aside__call');
    callModalBtn.addEventListener('click', (e) =>{
        openActionCallFeedback();
    })
    document.addEventListener('click', (e) =>{
        if(e.target.id == "modal-call-img"){
            e.preventDefault();
            openActionCallFeedback();
        }
    })
};
showModal();

export function closeModal(){
    document.addEventListener('click',(e) => {
        if(e.target.id == 'closeBtn-callModal' ||e.target.id == 'header__hide-content' ){
            const modalCall = document.querySelector('.call');
            modalCall.classList.remove('modal-openedModal');
            document.querySelector('.header__hide-content').style.zIndex = '2';
            unBlurMainContent();
        }
        if(e.target.id =="closeBtn"|| e.target.id == 'header__hide-content'){
            const modalFeedback = document.querySelector('.feedback');
            modalFeedback.classList.remove('modal-openedModal');
            document.querySelector('.header__hide-content').style.zIndex = '2';
            unBlurMainContent();
        }
    })
};
closeModal();

export function openActionFeedbackMobile(){
    const modalFeedback = document.querySelector('.feedback');
    modalFeedback.classList.add('modal-openedModal');
    // document.querySelector('.header__hide-content').style.zIndex = '200';
    const aside = document.querySelector('.aside');
    aside.classList.remove('aside-openedBurger');
    blurMainContent();
}

export function openActionCallFeedback(){
    const modalCall = document.querySelector('.call');
    modalCall.classList.add('modal-openedModal');
    document.querySelector('.header__hide-content').style.zIndex = '200';
    const aside = document.querySelector('.aside');
    aside.classList.remove('aside-openedBurger');
    blurMainContent();
}

