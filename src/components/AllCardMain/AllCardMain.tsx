import { IdataProduct } from '../../type/interfaces';
import style from './_allcard.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { CardOfProduct } from '../CardOfProduct/CardOfProduct';

export interface IdataAllCardMain {
  allProducts: IdataProduct[];
}

export function AllCardMain(dataAllCardMain: IdataAllCardMain): JSX.Element {
  const location = useLocation();
  const { allProducts } = dataAllCardMain;

  return (
    <div className={style.main_allcard}>
      {allProducts.length ? (
        allProducts.map((elem: IdataProduct, index: number) => (
          <Link to={`/product/${elem.id}${location.search}`} key={index}>
            <CardOfProduct title={elem.title} image={elem.images[0]} />
          </Link>
        ))
      ) : (
        <div className={style.main_empty}>
          Unfortunately nothing was found for your request!
        </div>
      )}
    </div>
  );
}
