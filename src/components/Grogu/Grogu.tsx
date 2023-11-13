import style from './_grogu.module.scss';
export function Grogu(): JSX.Element {
  return (
    <div className={style.container} data-testid="grogu-spinner">
      <div className={style.suns}></div>
      <div className={style.egg_back}></div>
      <div className={style.grogu}>
        <div className={style.grogu_body}></div>
        <div className={style.grogu_head}>
          <div className={style.grogu_head_left_ear}></div>
          <div className={style.grogu_head_right_ear}></div>
          <div className={style.grogu_head_left_eye}></div>
          <div className={style.grogu_head_right_eye}></div>
          <div className={style.grogu_head_smile}></div>
        </div>
        <div className={style.collar}></div>
      </div>
      <div className={style.egg}>
        <div className={style.egg_lid_left}></div>
        <div className={style.egg_lid_right}></div>
      </div>
      <div className={style.left_hand}></div>
      <div className={style.right_hand}></div>
    </div>
  );
}
