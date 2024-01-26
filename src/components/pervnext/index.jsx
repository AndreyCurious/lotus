import { memo } from "react";
import PropTypes from "prop-types";
import "./style.css";

function Pervnext({namePrev, nameNext, page, onClick, value}) {
  return (
    <div className="Pervnext">
			<button disabled={page.perv === null} className={`Pervnext-perv ${page.perv === null ? 'null' : ''}`} onClick={() => onClick(value, page.perv)}>{namePrev}
			</button>
			<button disabled={page.next === null}  className={`Pervnext-next ${page.next === null ? 'null' : ''}`} onClick={() => onClick(value, page.next)}>{nameNext}</button>
    </div>
  )
}

Pervnext.propTypes = {
	namePrev: PropTypes.string,
	nameNext: PropTypes.string,
	page: PropTypes.shape({
		perv: PropTypes.string,
		next: PropTypes.string
	}),
	onClick: PropTypes.func,
	value: PropTypes.string
}

export default memo(Pervnext);