import { useDispatch, useSelector } from 'react-redux';
import { IApiCountItem } from '../../store/reducers/apiCountItem';
import {
  decrementNumberPage,
  IdataApi,
  incrementNumberPage,
} from '../../store/reducers/apiDataReducer';
import style from './_pagination.module.scss';

export function Pagination(): JSX.Element {
  const { count } = useSelector((state: IApiCountItem) => state.apiCountItem);
  const { numberPage, countLimit } = useSelector(
    (state: IdataApi) => state.apiData
  );
  const dispatch = useDispatch();
  function handleOnClickPrev() {
    if (numberPage > 1) {
      dispatch(decrementNumberPage());
    }
  }
  function handleOnClickNext() {
    const countItem = count ? count : 1;
    const maxPage = countItem / countLimit;
    if (maxPage > numberPage) {
      dispatch(incrementNumberPage());
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
        {numberPage}
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
