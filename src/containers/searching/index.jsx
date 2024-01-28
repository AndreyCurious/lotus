import { memo, useEffect, useState } from 'react';
import useDebounce from '../../hooks/debounce';
import Pagelayout from '../../components/pagelayout';
import SearchContainer from '../../components/searchContainer';
import Loading from '../../components/loading';
import Persons from '../../components/persons';
import Pervnext from '../../components/pervnext';

function Searching() {
  const [value, setValue] = useState('');
  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState('start');
  const [page, setPage] = useState({ next: null, perv: null });

  const debounced = useDebounce(value, 500)
  useEffect(() => {
    if (debounced) {
      searchCharacters(value);
    }
  }, [debounced])

  async function searchCharacters(value, page) {
    let response = {};
    setPersons([]);
    setLoading('loading');
    page ?
      response = await fetch(page)
      :
      response = await fetch(`https://swapi.dev/api/people/?search=${value}`);
    const json = await response.json();

    setLoading('end')
    setPersons(json.results);
    setPage({ next: json.next, perv: json.previous })
  }
  const onClick = () => {
    setPersons([]);
    setValue('');
    setLoading('start')
    setPage({ next: null, perv: null })
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
        loading={loading}
      />
      <Pervnext value={value} onClick={searchCharacters} page={page} nameNext={'След'} namePrev={'Пред'} />
      {loading === 'loading' && <Loading />}
      {loading === 'end' && persons.length === 0 && value.length !== 0 ?
        <div>Ничего не найдено</div>
        :
        <>
        </>
      }
      {loading === 'end' && persons.length !== 0 && value.length !== 0 ?
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