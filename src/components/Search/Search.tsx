import { ChangeEvent, useState } from 'react';
import SearchLogo from '/assets/images/search.png';
import DeleteLogo from '/assets/images/delete.png';
import style from './_search.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeSearchValue, chengeNumberPage, IdataApi
} from '../../store/reducers/apiDataReducer';

export function Search(): JSX.Element {
  const dispatch = useDispatch();
  const searchValue = useSelector((state:IdataApi) => state.apiData.searchValue);
  const [search, setSearch] = useState(searchValue);

  function handleOnChangeInput(e: ChangeEvent<HTMLInputElement>): void {
    setSearch(e.target.value);
  }

  function handleOnClickButtonDelete(): void {
    localStorage.removeItem('searchQuery');
    const emptyString = '';
    setSearch(emptyString);
    dispatch(changeSearchValue(emptyString));
    dispatch(chengeNumberPage(1));
  }

  function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    if (search === '') {
      handleOnClickButtonDelete();
    } else {
      localStorage.setItem('searchQuery', search);
      dispatch(changeSearchValue(search));
      dispatch(chengeNumberPage(1));
    }
  }

  return (
    <form className={style.search} onSubmit={handleSubmit} data-testid="search">
      <input
        className={style.search_input}
        type="text"
        placeholder="Search..."
        autoFocus={true}
        onChange={(e): void => {
          handleOnChangeInput(e);
        }}
        value={search}
      />
      <button className={style.search_button} onClick={handleSubmit}>
        <img
          className={style.search_button_img}
          src={SearchLogo}
          alt="SearchLogo"
        />
      </button>
      <button className={style.search_button} onClick={handleOnClickButtonDelete}>
        <img
          className={style.search_button_img}
          src={DeleteLogo}
          alt="DeleteLogo"
        />
      </button>
    </form>
  );
}
