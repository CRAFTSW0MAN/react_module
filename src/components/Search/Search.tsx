import { ChangeEvent, useState } from 'react';
import SearchLogo from '/assets/images/search.png';
import DeleteLogo from '/assets/images/delete.png';
import style from './_search.module.scss';


type UpdateSearchFunction = (search: string) => void;

interface SearchProps {
  upDateSearch: UpdateSearchFunction;
}

export function Search({ upDateSearch }: SearchProps): JSX.Element  {
  const inputValueSearch = localStorage.getItem('searchQuery');
  const [search, setSearch]= useState(inputValueSearch ? inputValueSearch : '')

  function OnChangeInput(e: ChangeEvent<HTMLInputElement>): void {setSearch(e.target.value)}

  function OnClickButtonDelete(): void {
    const emptyString = '';
    setSearch(emptyString);
    upDateSearch(emptyString);
  }

    return (
      <div className={style.search}>
        <input
          className={style.search_input}
          type="text"
          placeholder="Search..."
          autoFocus={true}
          onChange={(e): void => {
            OnChangeInput(e);
          }}
          defaultValue={search}
        />
        <button
          className={style.search_button}
          onClick={() => upDateSearch(search)}
        >
          <img
            className={style.search_button_img}
            src={SearchLogo}
            alt="SearchLogo"
          />
        </button>
        <button
          className={style.search_button}
          onClick={OnClickButtonDelete}
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
