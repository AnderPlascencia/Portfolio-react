const Navbar = () => {
  return (
    <nav>
      <div class="nav__container">
        <div class="logo-container">
          <h1 class="main-logo">Ander Plascencia</h1>
          <p class="secondary-logo">Creative Portfolio</p>
        </div>

        <ul class="navigation">
          <li class="navigation__item"><a href="/" class="navigation__link">Home</a></li>
          <li class="navigation__item"><a href="/resume" class="navigation__link">Resume</a></li>
          <li class="navigation__item"><a href="/portfolio" class="navigation__link">Portfolio</a></li>
          <li class="navigation__item"><a href="/contact" class="navigation__link">Contact</a></li>
        </ul>

        <div class="footer">
          <span class="footer__text">© Ander Plascencia 2020, All rights reserved</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
