export function removeAsideMainWrapper(){
    document.addEventListener('DOMContentLoaded', () => {
        if(window.innerWidth < 1440){
            const asideMainWrapper = document.querySelector('.aside-main');
            const wrapperInner = document.querySelector('.aside-main').innerHTML;
            asideMainWrapper.outerHTML = wrapperInner;
        }
    })
    window.addEventListener('resize', () => {
        if(document.querySelector('.aside-main')){
            if(window.innerWidth < 1440){
                const asideMainWrapper = document.querySelector('.aside-main');
                const wrapperInner = document.querySelector('.aside-main').innerHTML;
                asideMainWrapper.outerHTML = wrapperInner;
            }
        }
        if(!document.querySelector('.aside-main')){
            if(window.innerWidth > 1439){
                const currentAside = document.querySelector('.aside');
                const currentMain = document.querySelector('.main');
                const newLayout = document.createElement('div');
                newLayout.classList.add('aside-main');
                newLayout.appendChild(currentAside);
                newLayout.appendChild(currentMain);
                const mainDocumentWrapper = document.querySelector('.wrapper');
                mainDocumentWrapper.appendChild(newLayout);
            }
        }
    })
};
removeAsideMainWrapper();

