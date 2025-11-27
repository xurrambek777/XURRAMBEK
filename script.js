const tabs = document.querySelectorAll(".tabheader__item");
const tabContents = document.querySelectorAll(".tab_content");
const tabParent = document.querySelector(".tabheader__items");
function tabsHeaden(){
    tabContents.forEach((item)=>{
        item.style.display = 'none'
    })
 
    tabs.forEach((item)=>{
        item.classList.remove('tabheader__item_active')
    })
}
tabsHeaden()    


function show(index){
    tabContents[index].style.display = 'flex'
    tabs[index].classList.add("tabheader__item_active") 
}

show(3)

 tabParent.addEventListener("click", (event) => {
     if (event.target && event.target.classList.contains("tabheader__item")) {
          tabs.forEach((tab, index) => {
             if (event.target === tab) {
                 tabsHeaden
                 
                 
                 ();
                  show(index);
             }
         });
     }
 });


const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');


const contactBtns = document.querySelectorAll('.button.phone');


contactBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
  });
});


modalClose.addEventListener('click', () => {
  modal.classList.add('hide');
  modal.classList.remove('show');
  document.body.style.overflow = '';
});


modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }
});





