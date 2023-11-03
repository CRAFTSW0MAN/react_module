import { IdataCardPeople } from '../../type/interfaces';
import { peopleImages } from '../peopleImages/peopleImages';
import style from './_cardOfPeople.module.scss';

export function CardOfPeople(card: IdataCardPeople): JSX.Element  {
  const {name, height, mass, gender, hair_color,skin_color}= card;
  return (
    <div className={style.card}>
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
      <div className={style.card_title}>{name}</div>
      <div className={style.card_height}>
        Height: <span className={style.card_span}>{height} cm</span>
      </div>
      <div className={style.card_mass}>
        Mass: <span className={style.card_span}>{mass} kg</span>
      </div>
      <div className={style.card_gender}>
        Gender: <span className={style.card_span}>{gender}</span>
      </div>
      <div className={style.card_hair_color}>
        Hair Color: <span className={style.card_span}>{hair_color}</span>
      </div>
      <div className={style.card_skin_color}>
        Skin Color: <span className={style.card_span}>{skin_color}</span>
      </div>
    </div>
  );
}
