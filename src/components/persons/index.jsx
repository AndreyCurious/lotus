import { memo } from "react";
import PropTypes from "prop-types";
import "./style.css";

function Persons({ persons }) {
  console.log(persons)
  return (
    <div className="Prsons">
      {persons.map((item, index) => (
        <div>
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  )
}

Persons.propTypes = {

}

export default memo(Persons);