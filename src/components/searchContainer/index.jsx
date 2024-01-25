import { memo } from "react";
import Search from '../../components/input';
import Button from '../../components/button';
import "./style.css";

function SearchContainer(props) {
  return (
    <div className="SearchContainer">
      <Search placeholder={props.placeholder} type={props.type} value={props.value} onChange={props.onChange} />
      <Button name={props.name} type={props.type} onClick={props.onClick} />
    </div>
  )
}

export default memo(SearchContainer);