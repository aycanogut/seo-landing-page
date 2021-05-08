const navSlide = () => {
  const burger = document.querySelector(".burger-toggler");
  const nav = document.querySelector(".navbar__collapse");
  const navLinks = document.querySelectorAll('.navbar__items')

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  });

  navLinks.innerHTML = 'deneme';

}

navSlide();