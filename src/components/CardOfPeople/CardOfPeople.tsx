import { Component } from 'react';
import { IdataPeople } from '../../type/interfaces';
import { peopleImages } from '../peopleImages/peopleImages';
import style from './_cardOfPeople.module.scss';


export class CardOfPeople extends Component <{ card: IdataPeople}> {
  constructor(props: { card: IdataPeople}) {
    super(props);
  }

  render() {
    const { name, height, mass, gender, hair_color, skin_color } = this.props.card;
    return (
      <div className={style.card}>
        <img className={style.card_img} src={peopleImages[`${name}`]} alt={name} />
        <div className={style.card_title}>{name}</div>
        <div className={style.card_height}>Height: {height}</div>
        <div className={style.card_mass}>Mass: {mass}</div>
        <div className={style.card_gender}>Gender: {gender}</div>
        <div className={style.card_hair_color}>Hair Color: {hair_color}</div>
        <div className={style.card_skin_color}>Skin Color: {skin_color}</div>
      </div>
    );
  }
}