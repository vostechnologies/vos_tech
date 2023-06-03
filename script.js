let time= document.getElementById("current-time");

setInterval(() =>{
    let d=new Date();
    time.innerHTML=d.toLocaleTimeString();

},1000)

// carousel
/*
* Stacked Cards
*/
const carouselList = document.querySelector('.carousel__list');
const carouselItems = document.querySelectorAll('.carousel__item');
const carouselText = document.querySelector('.carousel-text p');
const dots = document.querySelectorAll('.dot');
const prevArrow = document.querySelector('.arrow-prev');
const nextArrow = document.querySelector('.arrow-next');
const elems = Array.from(carouselItems);

carouselList.addEventListener('click', function (event) {
  const newActive = event.target;
  const isItem = newActive.closest('.carousel__item');

  if (!isItem || newActive.classList.contains('carousel__item_active')) {
    return;
  }

  update(newActive);
});

prevArrow.addEventListener('click', function () {
  const activeItem = document.querySelector('.carousel__item_active');
  const currentIndex = elems.findIndex((elem) => elem === activeItem);
  const prevIndex = (currentIndex === 0) ? elems.length - 1 : currentIndex - 1;
  const newActive = elems[prevIndex];

  update(newActive);
});

nextArrow.addEventListener('click', function () {
  const activeItem = document.querySelector('.carousel__item_active');
  const currentIndex = elems.findIndex((elem) => elem === activeItem);
  const nextIndex = (currentIndex === elems.length - 1) ? 0 : currentIndex + 1;
  const newActive = elems[nextIndex];

  update(newActive);
});

const update = function (newActive) {
  const newActivePos = parseInt(newActive.dataset.pos);

  carouselItems.forEach(item => {
    const itemPos = parseInt(item.dataset.pos);
    const newPos = getPos(itemPos, newActivePos);
    item.dataset.pos = newPos;
    item.classList.toggle('carousel__item_active', newPos === 0);
  });

  dots.forEach((dot, index) => {
    dot.classList.toggle('active-dot', index === newActivePos + 2);
  });

  carouselText.textContent = newActive.textContent;
};

const getPos = function (current, active) {
  const diff = current - active;

  if (Math.abs(current - active) > 2) {
    return -current;
  }

  return diff;
};





window.addEventListener('scroll', function() {
  var layoutLine = document.querySelector('.layout__line');
  var layoutFaboolea = document.querySelector('.layout__faboolea');
  var windowHeight = window.innerHeight;
  var documentHeight = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
  );
  var scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
  var scrollPercentage = (scrollPosition + windowHeight) / documentHeight * 100;

  if (scrollPercentage >= 90) {
    layoutFaboolea.style.display = 'none';
  } else {
    layoutFaboolea.style.display = 'block';
  }
});


$(document).ready(function() {
  // Smooth scrolling when a navbar link is clicked
  $('nav a[data-scroll]').on('click', function(e) {
    e.preventDefault(); // Prevent the default anchor tag behavior
    var target = $($(this).data('scroll'));
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });
});

