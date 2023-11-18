import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMainContext } from '../../pages/MainPage/Main.Page';
import { decrementNumberPage, IdataApi, incrementNumberPage } from '../../store/reducers/apiDataReducer';
import style from './_pagination.module.scss';

export function Pagination(): JSX.Element {
  const data = useMainContext();
  const { numberPage, countLimit} = useSelector((state:IdataApi) => state.apiData);
  const [page, setPage] = useState(numberPage);
  const dispatch = useDispatch();
  function handleOnClickPrev() {
    if (page > 1) {
      setPage(page - 1);
      dispatch(decrementNumberPage())
    }
  }
  function handleOnClickNext() {
    const countItem = data.arrProducts.length ? data.countItemData : 1;
    const maxPage = countItem / countLimit;
    if (maxPage > page) {
      setPage(page + 1);
      dispatch(incrementNumberPage())
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
