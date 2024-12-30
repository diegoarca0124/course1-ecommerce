var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  prevNextButtons: false,
  pageDots: false,
 /*  draggable: false */
});

//////////////////////////////////////////////////////////////////////////

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1:{
      slidesPerView: 1,
    },
    568: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

//////////////////////////////////////////////////////////////////////////
let countDownDate = new Date("Jan 24, 2030 15:37:25").getTime();

function setDate_(){
  let today = new Date().getTime();
  let distance = countDownDate - today;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('countdown').innerHTML = `<p id="txt-time"> ${days} : ${hours} : ${minutes} : ${seconds}</p>`
}

setInterval(()=>{
  setDate_();
},1000)












