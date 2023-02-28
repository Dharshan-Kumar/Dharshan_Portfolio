/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header=document.getElementById('header');
    if(this.scrollY>=50)header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}
window.addEventListener('scrollHeader');
/*=============== PROJECT MODAL ===============*/
const modalViews=document.querySelectorAll('.project__modal'),
    modalBtns=document.querySelectorAll('.project__button'),
    modalCLose=document.querySelectorAll('.project__modal-close')

let modal=function(modalClick){
    modalViews[modalClick].classList.add('active-modal');
}
modalBtns.forEach((mb, i)=>{
    mb.addEventListener('click',()=>{
        modal(i)
    })
})

modalCLose.forEach((mc)=>{
    mc.addEventListener('click',()=>{
        modalViews.forEach((mv)=>{
            mv.classList.remove('active-modal')
        })
    })
})
/*=============== MIXITUP FILTER PORTFOLIO ===============*/


/* Link active work */ 


/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== LIGHT DARK THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/