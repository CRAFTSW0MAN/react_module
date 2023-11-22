import { IdataCardPeople } from '../../type/interfaces';
import style from './_cardOfPeople.module.scss';

export function CardOfPeople(card: IdataCardPeople): JSX.Element {
  const { title, image } = card;
  return (
    <div className={style.card}>
      <div className={style.card_title}>{title}</div>
      <div className={style.card_img_block}>
        <img className={style.card_img} src={image} alt={card.title} />
      </div>
    </div>
  );
}
