import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={classes["main-part"]}>
        <div className="footer-list-wrapper">
          <h3 className={classes["footer-heading"]}>ReactMeals</h3>
          <ul className={classes["footer-list"]}>
            <li className={classes["footer-list-item"]}>
              <a href="#" className={classes["footer-list-link"]}>
                support@reactmeals.com
              </a>
            </li>
            <li className={classes["footer-list-item"]}>
              <a href="#" className={classes["footer-list-link"]}>
                Stockholm, Maingatan 123
              </a>
            </li>
            <li className={classes["footer-list-item"]}>
              <a href="#" className={classes["footer-list-link"]}>
                Tel: +46 74 546 82 37
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
        <div className={classes["creator-part"]}>
          <h3 className={classes["footer-heading"]}>Creator part</h3>
          <div className={classes["copyright-text"]}>
            <p>Copyright: &copy; 2021. ReactMeals. All rights reserved.</p>
          </div>

          <div className={classes["text-right"]}>
            <p>
              Made with ❤️ by <span>Hamza Hayd</span> 👍🏽
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
