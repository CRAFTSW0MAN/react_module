import { IdataCardProduct } from '../../type/interfaces..interface';
import style from './_cardOfProduct.module.scss';

export function CardOfProduct(card: IdataCardProduct): JSX.Element {
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
