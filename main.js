'use strict'

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
  console.log(window.scrollY);
  console.log(`navbarHeight = ${navbarHeight}`);
  if(window.scrollY > navbarHeight){
    navbar.classList.add('navbar--dark')
  } else{
    navbar.classList.remove('navbar--dark')
  }
});

//handle scrolling when tapping on the navmenu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click',(event)=>{

  const target = event.target;
  const link = target.dataset.link;
  if(link == null){
    return;
  }
  scrollIntoView(link);
  // console.log(event.target.dataset.link);
  // const scrollTo = document.querySelector(link);
  // scrollTo.scrollIntoView({behavior: "smooth"});
})

// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', ()=>{
  navbarMenu.classList.toggle('open');
});


//handle click on "click me" button on home
const homeContactBtn = document.querySelector('.home__contact')
homeContactBtn.addEventListener('click',()=>{
  scrollIntoView('#contact');
});

//make home solwly fade to transparent as the window scroll down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
  home.style.opacity = 1 - window.scrollY / homeHeight;
})

/* show 'arrow up' button when scrolling down */
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll',()=>{
  if(window.scrollY > homeHeight/2){
    arrowUp.classList.add('visible')
  }else{
    arrowUp.classList.remove('visible')
  }
});

/*Handle click on the 'arrow up' button */
arrowUp.addEventListener('click',()=>{
  scrollIntoView('#home');
})

//Projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click',(e)=>{
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(filter == null){
      return;
  }

  //remove selection from the previous item and select and the new one
  const active = document.querySelector('.category__btn.selected');
  if(active !== null){
    active.classList.remove('selected');
  }
  e.target.classList.add('selected');



    projectContainer.classList.add('anim-out');
    setTimeout(()=>{
      projects.forEach((project)=>{
        console.log(project.dataset.type);
        if(filter === '*' || filter === project.dataset.type){
          project.classList.remove('invisible')
        }else{
          project.classList.add('invisible')
        }
      });
      projectContainer.classList.remove('anim-out');
    },300)

  });




function scrollIntoView(selector){
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior: "smooth"});
}