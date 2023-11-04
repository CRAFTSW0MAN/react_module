import { IdataCardPeople } from '../../type/interfaces';
import { peopleImages } from '../peopleImages/peopleImages';
import style from './_cardOfPeople.module.scss';

export function CardOfPeople(card: IdataCardPeople): JSX.Element {
  const { name } = card;
  return (
    <div className={style.card}>
      <div className={style.card_title}>{name}</div>
      <div className={style.card_img_block}>
        <img
          className={style.card_img}
          src={
            !!peopleImages[`${name}`]
              ? peopleImages[`${name}`]
              : peopleImages['no Icon']
          }
          alt={card.name}
        />
      </div>
    </div>
  );
}
