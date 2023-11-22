import { MainConsumer } from '../../pages/MainPage/Main.Page';
import style from './_limit-item.module.scss';

export function LimitItem(): JSX.Element {
  return (
    <MainConsumer>
      {({ selectedValue, handleChangeSelect }) => (
        <div className={style.select_block}>
          <select
            className={style.select}
            name="LimitItem"
            id="limitItem"
            onChange={(e) => handleChangeSelect(e)}
            value={selectedValue}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
          </select>
        </div>
      )}
    </MainConsumer>
  );
}
