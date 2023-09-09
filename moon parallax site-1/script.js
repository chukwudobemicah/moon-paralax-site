'use strict';

const hamburgerContainer = document.querySelector('.hamburger-container');
const menuContainer = document.querySelector('.menu-container');
const nav = document.querySelector('nav');
const stars = document.querySelector('.stars');
const mountainFront = document.querySelector('.mountain-front');
const mountainBack = document.querySelector('.mountain-back');
const moon = document.querySelector('.moon');
const moonlightText = document.querySelector('h1');
const header = document.querySelector('header');

// theme switch

const purpleThemeBtn = document.querySelector('#purple-theme-btn');
const blueThemeBtn = document.querySelector('#blue-theme-btn');
const darkThemeBtn = document.querySelector('#dark-theme-btn');
const theme = document.querySelector('nav li:nth-child(5)');
const themeBtns = document.querySelector('nav ul li:nth-child(5) div .theme-btn');

const changeDarkBtnColor = function(){
  if(!document.documentElement.classList.contains('dark')){
    darkThemeBtn.style.backgroundColor = 'black';
  }else{
    darkThemeBtn.style.backgroundColor = 'grey';
  }
}

purpleThemeBtn.addEventListener('click', function(){
  document.documentElement.classList.remove('blue');
  document.documentElement.classList.remove('dark');
  document.documentElement.classList.add('purple');
  changeDarkBtnColor()
})
blueThemeBtn.addEventListener('click', function(){
  document.documentElement.classList.remove('purple');
  document.documentElement.classList.remove('dark');
  document.documentElement.classList.add('blue');
  changeDarkBtnColor()
})
darkThemeBtn.addEventListener('click', function(){
  document.documentElement.classList.remove('blue');
  document.documentElement.classList.remove('purple');
  document.documentElement.classList.add('dark');
  changeDarkBtnColor()
})

theme.addEventListener('click', function(){
  themeBtns.classList.toggle('visible')
})

window.addEventListener('scroll', function(){
  let value = window.scrollY;
  stars.style.left = value * 0.25 + 'px';
  moon.style.top = value * 1.25 + 'px';
  mountainBack.style.top = value * 0.3 + 'px';
  mountainFront.style.top = value * 0 + 'px';
  // moonlightText.style.marginRight = value * 5 + 'px';
  header.style.top = value * 0 + 'px';
})

let hamburgerOpen = false;
  
const body= document.querySelector('body');
const overlay= document.querySelector('.overlay');

const checkNavClass = function(){
  if(nav.classList.contains('translate-left')){
    nav.classList.remove('translate-left');
    nav.classList.add('translate-right');
  }else{
    nav.classList.remove('translate-right');
    nav.classList.add('translate-left');
  }
}

hamburgerContainer.addEventListener('click',function(){
  checkNavClass()
  body.classList.toggle('body-max-height')
  overlay.classList.toggle('hidden')
})

menuContainer.addEventListener('click', function () {
  if (!hamburgerOpen) {
    menuContainer.classList.add('open');
    hamburgerOpen = true;
  } else {
    menuContainer.classList.remove('open');
    hamburgerOpen = false;
  }
});

overlay.addEventListener('click',function(){
  checkNavClass()
  overlay.classList.add('hidden')
  body.classList.remove('body-max-height')
  menuContainer.classList.remove('open');
  hamburgerOpen = false;
  
});


