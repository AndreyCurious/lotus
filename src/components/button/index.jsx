import { memo } from "react";
import PropTypes from "prop-types";
import "./style.css";

function Button({ name, type, onClick }) {
  return (
    <button
      className={`Button ${type}`}
      onClick={onClick}
    >
      {name}
    </button>
  )
}

Button.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
}

export default memo(Button);