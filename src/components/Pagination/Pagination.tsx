import { useState } from 'react';
import { useMainContext } from '../../pages/MainPage/Main.Page';
import style from './_pagination.module.scss';

export function Pagination(): JSX.Element {
  const data = useMainContext();
  const [page, setPage] = useState<number>(
    data.arrProducts.length ? data.countPage : 1
  );

  function handleOnClickPrev() {
    if (page > 1) {
      setPage(page - 1);
      data.handleUpdatePage(page - 1);
    }
  }
  function handleOnClickNext() {
    const countItem = data.arrProducts.length ? data.countItemData : 1;
    const maxPage = countItem / data.selectedValue;
    if (maxPage > page) {
      setPage(page + 1);
      data.handleUpdatePage(page + 1);
    }
  }

  return (
    <div className={style.pagination} data-testid="pagination">
      <button
        className={style.pagination_button}
        onClick={handleOnClickPrev}
        data-testid="Prev"
      >
        Prev
      </button>
      <div className={style.pagination_page} data-testid="page">
        {page}
      </div>
      <button
        className={style.pagination_button}
        onClick={handleOnClickNext}
        data-testid="Next"
      >
        Next
      </button>
    </div>
  );
}
