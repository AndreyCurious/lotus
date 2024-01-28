import { memo } from "react";
import Search from '../../components/input';
import Button from '../../components/button';
import "./style.css";

function SearchContainer(props) {
  return (
    <div className="SearchContainer">
      <Search placeholder={props.placeholder} type={props.type} value={props.value} onChange={props.onChange} />
      <Button loading={props.loading} name={props.name} type={props.type} onClick={props.onClick} />
    </div>
  )
}

SearchContainer.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  name: PropTypes.string,
  loading: PropTypes.string
}


export default memo(SearchContainer);