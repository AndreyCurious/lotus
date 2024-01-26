import { memo, useEffect, useState } from 'react';
import useDebounce from '../../hooks/debounce';
import lodash from 'lodash';
import Pagelayout from '../../components/pagelayout';
import SearchContainer from '../../components/searchContainer';
import Loading from '../../components/loading';
import Persons from '../../components/persons';
import Pervnext from '../../components/pervnext';

function Searching() {
  const [value, setValue] = useState('');
  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState({next: null, perv: null});

  const debounced = useDebounce(value, 500)
  useEffect(() => {
    if (debounced) {
      searchCharacters(value);
    }
  }, [debounced])

  async function searchCharacters (value, page) {
    let response = {};
    setPersons([]);
    setLoading(true);
    page ? 
      response = await fetch(page)
    :
      response = await fetch(`https://swapi.dev/api/people/?search=${value}`);
      const json = await response.json();
     
      setLoading(false)
      setPersons(json.results);
      setPage({next: json.next, perv: json.previous})
  }
  const onClick = () => {
    setPersons([]);
    setValue('');
    setPage({next: null, perv: null})
  }
  return (
    <Pagelayout>
      <SearchContainer
        placeholder={'Имя героя...'}
        type={'input'}
        value={value}
        onChange={setValue}
        onClick={onClick}
        name={'Сбросить'}
      />
      <Pervnext value={value} onClick={searchCharacters} page={page} nameNext={'След'} namePrev={'Пред'}/>
      {loading && <Loading />}
      {!loading && persons.length === 0 && value.length !== 0 ?
         <div>Ничего не найдено</div>
        :
        <>
        </>
      }
      {!loading && persons.length !== 0 && value.length !== 0 ?
      <>
          <Persons persons={persons} />
      </>
      :
      <></>
      }
    </Pagelayout>
  )

}

export default memo(Searching);