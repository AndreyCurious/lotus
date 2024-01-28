import { memo } from "react";
import PropTypes from "prop-types";
import "./style.css";

function Button({ name, type, onClick, loading }) {
  return (
    <button
      className={`Button ${type}`}
      onClick={() => onClick()}
      disabled={loading === "loading"}
    >
      {name}
    </button>
  )
}

Button.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func
}

export default memo(Button);