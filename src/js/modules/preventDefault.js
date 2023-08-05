export function preventDefault(){
    let links = document.querySelectorAll('a');
    for(let link of links){
        link.addEventListener('click', (e) => {
            e.preventDefault();
        })
    };
};
preventDefault();