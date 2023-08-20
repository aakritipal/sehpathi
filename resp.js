burger=document.querySelector('.burger')
topnav=document.querySelector('.top-nav')
list=document.querySelector('.list')
burger.addEventListener('click',()=>{
   list.classList.toggle('v-class-resp');
   topnav.classList.toggle('h-nav-resp');
   burger.classList.toggle('burger-resp');

})
