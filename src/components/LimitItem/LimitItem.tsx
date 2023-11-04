import style from './_limit-item.module.scss';

export function LimitItem(): JSX.Element {
  return (
    <div className={style.pagination}>
      <select name="LimitItem" id="limitItem">
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
      </select>
    </div>
  );
}
