import "./footer.css";
import logo from "../../assets/img/logo/site-logo.svg";
import media from "../..//assets/img/SocialMedia.svg"
function Footer() {
  return (
    <footer className="footer text-center">
      <div className="container">
        <ul className="d-flex justify-content-between text-center footer__list">
          <li>
            <h4>Contact Us</h4>
            <p>9 W 53rd St, London, NY 10019, UK</p>
            <p>+1 212-344-1230<br/>+1 212-555-1230</p>
          </li>
          <li>
            <img src={logo} alt="logo" className="footer__logo" />
            <p>"The best way to find yourself is to lose yourself in the<br/> service of others.”</p>
          </li>
          <li>
            <h4>Working Hours</h4>
            <p>Monday-Friday:<br/>
              08:00 am -12:00 am<br/>
              <br/>Saturday-Sunday:<br/>
              07:00am -11:00 pm</p>
          </li>
        </ul>
        <section className="footer__img-wrapper pb-5 mb-5">
            <img src={media} alt="social media" className="footer__link"/>
        </section>
        <p className="py-2 footer__text">2022 Pop online. All Rights reserved.</p>
      </div>
    </footer>
  );
}
export default Footer;
