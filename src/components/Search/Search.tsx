import { ChangeEvent, useState } from 'react';
import SearchLogo from '/assets/images/search.png';
import DeleteLogo from '/assets/images/delete.png';
import style from './_search.module.scss';
import { MainConsumer, useMainContext } from '../../pages/MainPage/Main.Page';

export function Search(): JSX.Element {
  const inputValueSearch = localStorage.getItem('searchQuery');
  const data = useMainContext();
  const [search, setSearch] = useState(
    inputValueSearch ? inputValueSearch : data.dataSearch
  );

  function handleOnChangeInput(e: ChangeEvent<HTMLInputElement>): void {
    setSearch(e.target.value);
  }

  function handleOnClickButtonDelete(): void {
    localStorage.removeItem('searchQuery');
    const emptyString = '';
    setSearch(emptyString);
    data.handleUpdateSearch(emptyString);
  }

  function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    if (search === '') {
      handleOnClickButtonDelete();
    } else {
      localStorage.setItem('searchQuery', search);
      data.handleUpdateSearch(search);
    }
  }

  return (
    <MainConsumer>
      {({ handleUpdateSearch }) => (
        <form className={style.search} onSubmit={handleSubmit}>
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
          <button
            className={style.search_button}
            onClick={() => handleUpdateSearch(search)}
          >
            <img
              className={style.search_button_img}
              src={SearchLogo}
              alt="SearchLogo"
            />
          </button>
          <button
            className={style.search_button}
            onClick={handleOnClickButtonDelete}
          >
            <img
              className={style.search_button_img}
              src={DeleteLogo}
              alt="DeleteLogo"
            />
          </button>
        </form>
      )}
    </MainConsumer>
  );
}
