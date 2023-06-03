let time= document.getElementById("current-time");

setInterval(() =>{
    let d=new Date();
    time.innerHTML=d.toLocaleTimeString();

},1000)

// carousel
/*
* Stacked Cards
*/

const state = {};
const carouselList = document.querySelector('.carousel__list');
const carouselItems = document.querySelectorAll('.carousel__item');
const elems = Array.from(carouselItems);

carouselList.addEventListener('click', function (event) {
  var newActive = event.target;
  var isItem = newActive.closest('.carousel__item');

  if (!isItem || newActive.classList.contains('carousel__item_active')) {
    return;
  };
  
  update(newActive);
});

const update = function(newActive) {
  const newActivePos = newActive.dataset.pos;

  const current = elems.find((elem) => elem.dataset.pos == 0);
  const prev = elems.find((elem) => elem.dataset.pos == -1);
  const next = elems.find((elem) => elem.dataset.pos == 1);
  const first = elems.find((elem) => elem.dataset.pos == -2);
  const last = elems.find((elem) => elem.dataset.pos == 2);
  
  current.classList.remove('carousel__item_active');
  
  [current, prev, next, first, last].forEach(item => {
    var itemPos = item.dataset.pos;

    item.dataset.pos = getPos(itemPos, newActivePos)
  });
};

const getPos = function (current, active) {
  const diff = current - active;

  if (Math.abs(current - active) > 2) {
    return -current
  }

  return diff;
}

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
