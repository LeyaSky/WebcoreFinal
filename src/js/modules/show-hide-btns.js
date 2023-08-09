export function showHideContent (){
    const brandsShowBtn = document.querySelector('.main-brands__button--show');
    const typesShowBtn = document.querySelector('.main-types__button--show');

    const brandsHideBtn = document.querySelector('.main-brands__button--hide');
    const typesHideBtn = document.querySelector('.main-types__button--hide');

    const brandsBox = document.querySelector('.main-brands__items--wide'); 
    const typesBox = document.querySelector('.main-types__items--wide'); 

    // Brands btns

    brandsShowBtn.addEventListener('click', () => {
        brandsBox.classList.remove('hidden');
        brandsShowBtn.style.display = 'none'
        // showBtn.classList.add('hiddenBtn');
        // hideBtn.classList.remove('hiddenBtn');
        brandsHideBtn.style.display = 'block';
    });

    brandsHideBtn.addEventListener('click', () => {
        brandsBox.classList.add('hidden');
        // showBtn.classList.remove('hiddenBtn');
        // hideBtn.classList.add('hiddenBtn');
        brandsShowBtn.style.display = 'block';
        brandsHideBtn.style.display = 'none';
    });

    // Types btns

    typesShowBtn.addEventListener('click', () => {
        typesBox.classList.remove('hidden');
        typesShowBtn.style.display = 'none'
        // showBtn.classList.add('hiddenBtn');
        // hideBtn.classList.remove('hiddenBtn');
        typesHideBtn.style.display = 'block';
    });

    typesHideBtn.addEventListener('click', () => {
        typesBox.classList.add('hidden');
        // showBtn.classList.remove('hiddenBtn');
        // hideBtn.classList.add('hiddenBtn');
        typesShowBtn.style.display = 'block';
        typesHideBtn.style.display = 'none';
        // window.setTimeout(function() {
        //     typesBox.classList.add('hidden');
        //   }, 500);
    });
};
showHideContent();
