let path = document.querySelector('path')
let pathLength = path.getTotalLength()

path.style.strokeDasharray = pathLength+ ' '+ pathLength;
path.style.strokeDashoffset = pathLength;


window.addEventListener('scroll',()=>{
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 500);

    //line drawing
    const scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

    const drawLength = pathLength * scrollPercentage;

    path.style.strokeDashoffset = pathLength - drawLength;


    //paralax scrolling
    const target = document.querySelectorAll('.scroll');

    const index = 0, length = target.length;
    for(index; index < length; index++){
        const pos = window.pageYOffset * target[index].dataset.rate;

        if(target[index].dataset.direction === 'vertical'){
            target[index].style.transform = 'translate3d(0px,'+pos+'px,0px)';
        } else {
            const posX = window.pageYOffset * target[index].dataset.ratex;
            const posY = window.pageYOffset * target[index].dataset.ratey;

            target[index].style.transform = 'translate3d('+posX+'px, '+posY+'px, 0px)';
        }
    }
})




