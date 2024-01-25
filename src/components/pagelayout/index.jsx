import { memo } from "react";
import PropTypes from "prop-types";
import "./style.css";

function Pagelayout({ children }) {
  return (
    <div className="Container">
      {children}
    </div>
  )
}

Pagelayout.propTypes = {
  children: PropTypes.node
}

export default memo(Pagelayout);