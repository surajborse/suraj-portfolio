$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling 

  

});

const body = document.querySelector('body');
const header = document.querySelector('header');
const toggle = document.getElementById('toggle');
const home = document.getElementById('home');
const about = document.getElementById('about');
const skill = document.getElementById('skill');
const service = document.getElementById('service');
const portfolio = document.getElementById('portfolio');
const contact = document.getElementById('contact');
const menu = document.getElementById('menu');
 toggle.onclick = function(){
   toggle.classList.toggle('active')
   body.classList.toggle('active')
   header.classList.toggle('active')
   home.classList.toggle('active')
   about.classList.toggle('active')
  skill.classList.toggle('active')
  service.classList.toggle('active')
  portfolio.classList.toggle('active')
  contact.classList.toggle('active')
  menu.classList.toggle('active')
   
 }