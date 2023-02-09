let nav = document.querySelector('nav');

window.addEventListener('scroll', ()=>{
        nav.classList.toggle('navScroll', window.scrollY > 10);
        console.log('salut')
})
