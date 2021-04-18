import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

/**
 * * {id, min, type, max, step and defaultValue} These are all default props
 * * which you can add to any input element.
 * * So these are not props
 * @param {} props
 * @returns
 */
const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};
export default MealItemForm;
