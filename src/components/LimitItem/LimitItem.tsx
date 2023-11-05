import style from './_limit-item.module.scss';


type UpdateLimitFunction = (event: React.ChangeEvent<HTMLSelectElement>) => void

interface ILimitProps {
  selectedValue:string;
  handleChange: UpdateLimitFunction;
}

export function LimitItem({selectedValue, handleChange }: ILimitProps): JSX.Element {
  return (
    <div className={style.pagination}>
      <select name="LimitItem" id="limitItem" onChange={(e)=>handleChange(e)} value={selectedValue}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
      </select>
    </div>
  );
}
