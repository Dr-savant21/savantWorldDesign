const toggle = document.querySelector('.toggler');
const links = document.querySelector('ul');
const btn = document.querySelector('.btn');

toggle.addEventListener('click', ()=>{
    links.classList.toggle('show-links');
    // btn.style.visibility = 'visible'
    btn.classList.toggle('btn-show')
})