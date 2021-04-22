import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={classes["main-part"]}>
        <div className="footer-list-wrapper">
          <h3 className={classes["footer-heading"]}>Grand Hotel</h3>
          <ul className={classes["footer-list"]}>
            <li className={classes["footer-list-item"]}>
              <a href="#" className={classes["footer-list-link"]}>
                support@grandhotel.com
              </a>
            </li>
            <li className={classes["footer-list-item"]}>
              <a href="#" className={classes["footer-list-link"]}>
                New York, Main Street 123
              </a>
            </li>
            <li className={classes["footer-list-item"]}>
              <a href="#" className={classes["footer-list-link"]}>
                Tel: +123 (4) 546 827
              </a>
            </li>
          </ul>
        </div>
        <div className={classes["contact"]}>
          <h3 className={classes["footer-heading"]}>Contact</h3>
          <p>Sign Up for out News Letter</p>
          <form action="" className={classes["footer-form"]}>
            <input
              type="text"
              placeholder="Your Email..."
              className={classes["footer-input"]}
            />
            <button type="button" className={classes["footer-btn"]}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
