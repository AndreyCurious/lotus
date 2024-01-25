import { memo } from "react";
import PropTypes from "prop-types";
import "./style.css";

function Input(props) {
  console.log(props)
  return (
    <input
      className="Search"
      value={props.value}
      type={props.type}
      placeholder={props.placeholder}
      onChange={(e) => props.onChange(e.target.value)}
    />
  )
}

Input.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
}

export default memo(Input);