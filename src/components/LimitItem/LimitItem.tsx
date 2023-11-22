import { useDispatch, useSelector } from 'react-redux';
import { chengeCountLimit, chengeNumberPage, IdataApi } from '../../store/reducers/apiDataReducer';
import style from './_limit-item.module.scss';

export function LimitItem(): JSX.Element {
  const dispatch = useDispatch();
  const {countLimit} = useSelector((state:IdataApi) => state.apiData);

  const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(chengeCountLimit(Number(event.target.value)));
    dispatch(chengeNumberPage(1));
  };
  return (
    <div className={style.select_block} data-testid="limit">
      <select
        className={style.select}
        name="LimitItem"
        id="limitItem"
        onChange={(e) => handleChangeSelect(e)}
        value={countLimit}
        data-testid="select"
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
      </select>
    </div>
  );
}
