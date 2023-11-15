import { icons, navLinks } from "../data";

const Footer = () => {
  return (
    <footer className='section footer'>
      <ul className='footer-links'>
        {navLinks.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.href} className='footer-link'>
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className='footer-icons'>
        {icons.map((icon) => {
          return (
            <li key={icon.id}>
              <a
                href={icon.href}
                rel='noreferrer'
                target='_blank'
                className='footer-icon'
              >
                <i className={icon.icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className='copyright'>
        copyright &copy; Umashankar travel tours company
        <span id='date'></span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
