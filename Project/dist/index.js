const burger = document.querySelector('#hamburger');
const menu =document.querySelector('#menu');

burger.addEventListener('click',() => {
if(menu.classList.contains('hidden')){
    burger.classList.add('rotate-90');
menu.classList.remove('hidden');
}else{
    burger.classList.remove('rotate-90');
menu.classList.add('hidden');
}
})