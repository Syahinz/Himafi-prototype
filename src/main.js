import "./style.css";
import javascriptLogo from "./assets/javascript.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import { setupCounter } from "./counter.js";

// Ambil elemen dari HTML
const btnHamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const iconMenu = document.getElementById('icon-menu');
const iconClose = document.getElementById('icon-close');

// Bikin event ketika hamburger diklik
btnHamburger.addEventListener('click', () => {
  // Toggle class 'hidden' di mobile menu
  mobileMenu.classList.toggle('hidden');
  
  // Toggle ganti ikon Garis 3 ke X
  iconMenu.classList.toggle('hidden');
  iconClose.classList.toggle('hidden');
  iconClose.classList.toggle('block');
  
  // Ubah status aria-expanded (buat aksesibilitas)
  const isExpanded = btnHamburger.getAttribute('aria-expanded') === 'true';
  btnHamburger.setAttribute('aria-expanded', !isExpanded);
});
