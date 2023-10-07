import NavbarComponent from './js/component/navbar.js';
import HeroProductComponent from './heroProduct.js';
import MiddleSectionComponent from './middleSection.js';

document.addEventListener('DOMContentLoaded', () => {
  const appContainer = document.getElementById('app-container');

  // Membuat instance komponen-komponen
  const navbar = new NavbarComponent();
  const heroProduct = new HeroProductComponent();
  const middleSection = new MiddleSectionComponent();

  // Mounting komponen-komponen ke dalam kontainer utama
  navbar.mount(appContainer);
  heroProduct.mount(appContainer);
  middleSection.mount(appContainer);
});
