import { IdataProduct } from '../../type/interfaces.interface';
import style from './_allcard.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { CardOfProduct } from '../CardOfProduct/CardOfProduct';
import { MainConsumer } from '../../pages/MainPage/Main.Page';

export function AllCardMain(): JSX.Element {
  const location = useLocation();

  return (
    <MainConsumer>
      {({ arrProducts }) => (
        <div className={style.main_allcard}>
          {arrProducts.length ? (
            arrProducts.map((elem: IdataProduct, index: number) => (
              <Link
                to={`/product/${elem.id}${location.search}`}
                key={index}
                data-testid="card-of-list"
              >
                <CardOfProduct title={elem.title} image={elem.images[0]} />
              </Link>
            ))
          ) : (
            <div className={style.main_empty}>
              Unfortunately nothing was found for your request!
            </div>
          )}
        </div>
      )}
    </MainConsumer>
  );
}
