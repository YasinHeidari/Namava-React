export default function BlackNavbar(){
    if (window.location.href.indexOf('/contactUs') > -1) {
    let header = document.querySelector('.header');
    if (header) {
        header.classList.add('black-bgc');
    }else{
        header.classList.remove('black-bgc');
    } 
}}
