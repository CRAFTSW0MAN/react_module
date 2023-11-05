import { useState } from 'react';
import style from './_pagination.module.scss';

type UpdatePageFunction = (page: number) => void;

interface IpropsPage {
  datalimit: number;
  countPage: number;
  countItem: number;
  handleUpdatePage: UpdatePageFunction;
}

export function Pagination(propsPage: IpropsPage): JSX.Element {
  const { datalimit, countPage, countItem, handleUpdatePage } = propsPage;
  const [page, setPage] = useState<number>(countPage);

  function handleOnClickPrev() {
    if (page > 1) {
      setPage(page - 1);
      handleUpdatePage(page - 1);
    }
  }
  function handleOnClickNext() {

    const maxPage = countItem / datalimit;
    if (maxPage > page) {
      setPage(page + 1);
      handleUpdatePage(page + 1);
    }
  }

  return (
    <div className={style.pagination}>
      <button className={style.pagination_button} onClick={handleOnClickPrev}>
        Prev
      </button>
      <div className={style.pagination_page}>{page}</div>
      <button className={style.pagination_button} onClick={handleOnClickNext}>
        Next
      </button>
    </div>
  );
}
