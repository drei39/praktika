function setCookie(name, value, days) {
<<<<<<< HEAD
  const date = new Date()
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
  const expires = 'expires=' + date.toUTCString()
  document.cookie = name + '=' + value + ';' + expires + ';path=/'
}

function getCookie(name) {
  const decodedCookie = decodeURIComponent(document.cookie)
  const ca = decodedCookie.split(';')
  const prefix = name + '='
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim()
    if (c.indexOf(prefix) === 0) {
      return c.substring(prefix.length, c.length)
    }
  }
  return ''
}

const body = document.body
const themeSwitcher = document.getElementById('theme-switcher')
const iconLight = document.querySelector('.icon-light')
const iconDark = document.querySelector('.icon-dark')
const siteLogo = document.getElementById('site-logo')
const savedTheme = getCookie('theme')

if (savedTheme === 'light') {
  body.classList.add('light-theme')
  body.classList.remove('dark-theme')
  if (iconLight) iconLight.style.display = 'none'
  if (iconDark) iconDark.style.display = ''
  if (siteLogo) siteLogo.src = 'media/img/logo_light.svg'
} else {
  body.classList.add('dark-theme')
  body.classList.remove('light-theme')
  if (iconLight) iconLight.style.display = ''
  if (iconDark) iconDark.style.display = 'none'
  if (siteLogo) siteLogo.src = 'media/img/logo_dark.svg'
}

if (themeSwitcher) {
  themeSwitcher.addEventListener('click', () => {
    body.classList.toggle('light-theme')
    body.classList.toggle('dark-theme')
    if (body.classList.contains('light-theme')) {
      setCookie('theme', 'light', 30)
      if (iconLight) iconLight.style.display = 'none'
      if (iconDark) iconDark.style.display = ''
      if (siteLogo) siteLogo.src = 'media/img/logo_light.svg'
    } else {
      setCookie('theme', 'dark', 30)
      if (iconLight) iconLight.style.display = ''
      if (iconDark) iconDark.style.display = 'none'
      if (siteLogo) siteLogo.src = 'media/img/logo_dark.svg'
    }
  })
}

const sliderWrapper = document.querySelector('#slider .slider-wrapper')
const slides = document.querySelectorAll('#slider .slide')
const prevBtn = document.querySelector('#slider .prev')
const nextBtn = document.querySelector('#slider .next')
const dots = document.querySelectorAll('#slider .dot')
let currentSlide = 0

function showSlide(index) {
  if (!sliderWrapper || slides.length === 0) return
  if (index < 0) index = slides.length - 1
  if (index >= slides.length) index = 0
  currentSlide = index
  const offset = -100 * index
  sliderWrapper.style.transform = `translateX(${offset}%)`
  dots.forEach(dot => dot.classList.remove('active'))
  dots[currentSlide].classList.add('active')
}

if (prevBtn && nextBtn && dots.length > 0) {
  prevBtn.addEventListener('click', () => {
    showSlide(currentSlide - 1)
  })
  nextBtn.addEventListener('click', () => {
    showSlide(currentSlide + 1)
  })
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      showSlide(i)
    })
  })
  showSlide(currentSlide)
}

;(function createStarryBackground() {
  const starry = document.createElement('div')
  starry.className = 'starry-bg'
  document.body.appendChild(starry)
  for (let i = 0; i < 150; i++) {
    const star = document.createElement('div')
    star.className = 'star'
    const x = Math.random() * 100
    const y = Math.random() * 100
    star.style.left = x + '%'
    star.style.top = y + '%'
    const dur = 2 + Math.random() * 4
    star.style.animationDuration = dur + 's'
    starry.appendChild(star)
  }
})()
=======
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");
  const prefix = name + "=";
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(prefix) === 0) {
      return c.substring(prefix.length, c.length);
    }
  }
  return "";
}

const body = document.body;
const themeSwitcher = document.getElementById("theme-switcher");
const iconLight = document.querySelector(".icon-light");
const iconDark = document.querySelector(".icon-dark");
const siteLogo = document.getElementById("site-logo");
const savedTheme = getCookie("theme");

if (savedTheme === "light") {
  body.classList.add("light-theme");
  body.classList.remove("dark-theme");
  if (iconLight) iconLight.style.display = "none";
  if (iconDark) iconDark.style.display = "";
  if (siteLogo) siteLogo.src = "media/img/logo_light.svg";
} else {
  body.classList.add("dark-theme");
  body.classList.remove("light-theme");
  if (iconLight) iconLight.style.display = "";
  if (iconDark) iconDark.style.display = "none";
  if (siteLogo) siteLogo.src = "media/img/logo_dark.svg";
}

if (themeSwitcher) {
  themeSwitcher.addEventListener("click", () => {
    body.classList.toggle("light-theme");
    body.classList.toggle("dark-theme");
    if (body.classList.contains("light-theme")) {
      setCookie("theme", "light", 30);
      if (iconLight) iconLight.style.display = "none";
      if (iconDark) iconDark.style.display = "";
      if (siteLogo) siteLogo.src = "media/img/logo_light.svg";
    } else {
      setCookie("theme", "dark", 30);
      if (iconLight) iconLight.style.display = "";
      if (iconDark) iconDark.style.display = "none";
      if (siteLogo) siteLogo.src = "media/img/logo_dark.svg";
    }
  });
}

const sliderWrapper = document.querySelector("#slider .slider-wrapper");
const slides = document.querySelectorAll("#slider .slide");
const prevBtn = document.querySelector("#slider .prev");
const nextBtn = document.querySelector("#slider .next");
const dots = document.querySelectorAll("#slider .dot");
let currentSlide = 0;

function showSlide(index) {
  if (!sliderWrapper || slides.length === 0) return;
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;
  currentSlide = index;
  const offset = -100 * index;
  sliderWrapper.style.transform = `translateX(${offset}%)`;
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentSlide].classList.add("active");
}

if (prevBtn && nextBtn && dots.length > 0) {
  prevBtn.addEventListener("click", () => {
    showSlide(currentSlide - 1);
  });
  nextBtn.addEventListener("click", () => {
    showSlide(currentSlide + 1);
  });
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      showSlide(i);
    });
  });
  showSlide(currentSlide);
}
>>>>>>> 4e7be63 (Переделал полность index.html и хэдер с футером на каждой странице)
