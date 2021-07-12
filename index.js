const SHOWING_CLASS = "showing";
const firstSlide = document.querySelector(".slider-item:first-child");
const lastSlide = document.querySelector(".slider-item:last-child");
function slide() {
    const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
    if (currentSlide){
        currentSlide.classList.remove(SHOWING_CLASS);
        const nextSlide = currentSlide.nextElementSibling;
        if(nextSlide) {
            nextSlide.classList.add(SHOWING_CLASS);
        }else{
            firstSlide.classList.add(SHOWING_CLASS);
        }
    }else{
        firstSlide.classList.add(SHOWING_CLASS);
    }

}

// function slideButton() {
//     const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
//     const leftButton = document.querySelector(".left") 
//     const rightButton = document.querySelector(".right") 
//     const nextSlide = currentSlide.nextElementSibling;
//     const backSlide = currentSlide.previousElementSibling;
    
//     const handlePrevious =() =>{
//         if(currentSlide){

//             currentSlide.classList.remove(SHOWING_CLASS);
//         }
//             if(backSlide){
//                 backSlide.classList.add(SHOWING_CLASS);
//             }else{
//                 lastSlide.classList.add(SHOWING_CLASS);
//             }
//     }
    
//     const handleNext =()=>{
//         if(currentSlide){

//             currentSlide.classList.remove(SHOWING_CLASS);
//         }
//             if(nextSlide) {
//                 nextSlide.classList.add(SHOWING_CLASS);
//             }else{
//                 firstSlide.classList.add(SHOWING_CLASS);
//             }
//     }
    

//     let noneOnce = {
//         once : false
//     };
    
//     leftButton.addEventListener("click",handlePrevious,noneOnce);
//     rightButton.addEventListener("click",handleNext,noneOnce);
// }

slide();
setInterval(slide,2000);