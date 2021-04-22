import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2 style={{ color: "#d16008" }}>
        Delicious Food!
        <span className={classes["underline--magical"]}>Delivered </span> To You
      </h2>
      <p className={classes.subheading}>
        Choose your favorite meal from our{" "}
        <span className={classes["underline--magical"]}>
          {" "}
          broad selection of available meals
        </span>
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p className={classes.subheading}>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
