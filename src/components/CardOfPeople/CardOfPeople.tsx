import { Component } from 'react';
import { IdataPeople } from '../../type/interfaces';
import { peopleImages } from '../peopleImages/peopleImages';
import style from './_cardOfPeople.module.scss';

export class CardOfPeople extends Component<{ card: IdataPeople }> {
  constructor(props: { card: IdataPeople }) {
    super(props);
  }

  render() {
    const { name, height, mass, gender, hair_color, skin_color } =
      this.props.card;
    return (
      <div className={style.card}>
        <div className={style.card_img_block}>
        <img
          className={style.card_img}
          src={!!peopleImages[`${name}`]?peopleImages[`${name}`]:peopleImages['no Icon']}
          alt={name}
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
}
