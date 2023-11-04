import { ChangeEvent, useState } from 'react';
import SearchLogo from '/assets/images/search.png';
import DeleteLogo from '/assets/images/delete.png';
import style from './_search.module.scss';

type UpdateSearchFunction = (search: string) => void;

interface ISearchProps {
  handleUpdateSearch: UpdateSearchFunction;
}

export function Search({ handleUpdateSearch }: ISearchProps): JSX.Element {
  const inputValueSearch = localStorage.getItem('searchQuery');
  const [search, setSearch] = useState(
    inputValueSearch ? inputValueSearch : ''
  );

  function handleOnChangeInput(e: ChangeEvent<HTMLInputElement>): void {
    setSearch(e.target.value);
  }

  function handleOnClickButtonDelete(): void {
    const emptyString = '';
    setSearch(emptyString);
    handleUpdateSearch(emptyString);
  }

  return (
    <div className={style.search}>
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
    </div>
  );
}
