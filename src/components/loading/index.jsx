import { memo } from "react";
import PropTypes from "prop-types";
import "./style.css";

function Loading() {
  return (
    <div>
      Loading...
    </div>
  )
}

Loading.propTypes = {

}

export default memo(Loading);