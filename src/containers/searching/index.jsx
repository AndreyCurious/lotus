import { memo, useState } from 'react';
import Pagelayout from '../../components/pagelayout';
import SearchContainer from '../../components/searchContainer';
import Loading from '../../components/loading';
import Persons from '../../components/persons';

function Searching() {
  const [value, setValue] = useState('');
  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(false);
  const onClick = async () => {
    setLoading(true);
    const response = await fetch(`https://swapi.dev/api/people/?search=${value}`);
    const json = await response.json();
    setPersons(json.results);
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }
  return (
    <Pagelayout>
      <SearchContainer
        placeholder={'Имя героя...'}
        type={'search'}
        value={value}
        onChange={setValue}
        onClick={onClick}
        name={'Поиск'}
      />
      {loading ?
        <Loading />
        :
        <Persons persons={persons} />
      }

    </Pagelayout>
  )

}

export default memo(Searching);