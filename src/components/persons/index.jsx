import { memo } from "react";
import PropTypes from "prop-types";
import "./style.css";

function Persons({ persons }) {
  return (
    <div className="Persons">
      {persons.map((item, index) => (
        <div className="Persons-person" key={index}>
          <div className="Persons-person-item"><strong>Имя:</strong> <span>{item.name}</span></div>
          <div className="Persons-person-item"><strong>Цвет глаз:</strong> <span>{item.eye_color}</span></div>
          <div className="Persons-person-item"><strong>Пол:</strong><span> {item.gender}</span></div>
          <div className="Persons-person-item"><strong>Цвет волос:</strong> <span>{item.hair_color}</span></div>
          <div className="Persons-person-item"><strong>Цвет кожи:</strong> <span>{item.skin_color}</span></div>
        </div>
      ))}
    </div>
  )
}

Persons.propTypes = {
  persons: PropTypes.array
}

export default memo(Persons);