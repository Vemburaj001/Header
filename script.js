const menus= document.querySelector('#menu');
const orderlist= document.querySelector('ul');

  menus.addEventListener('click', ()=>{
    orderlist.classList.toggle('slide');
  });