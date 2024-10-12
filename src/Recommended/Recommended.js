import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Dymatize" title="Dymatize" />
          <Button onClickHandler={handleClick} value="Muscletech" title="Muscletech" />
          <Button onClickHandler={handleClick} value="RC" title="RC" />
          <Button onClickHandler={handleClick} value="MP" title="MP" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
