import { useGetDetailsProductQuery } from '../../api/Api';
import { Grogu } from '../../components/Grogu/Grogu';
import DeleteLogo from '/assets/images/delete.png';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import style from './_pageProduct.module.scss';
import {
  chengeLoaderDetailsProduct,
  IloaderDetailsProduct,
} from '../../store/reducers/loaderProduct';
import { useDispatch, useSelector } from 'react-redux';
import { IdataCardOneProduct } from '../../type/interfaces.interface';

export function PageProduct(): JSX.Element {
  const location = useLocation();
  const {  id = '1' } = useParams();
  const { data, isLoading } = useGetDetailsProductQuery({ id });
  console.log(data, id)
  const [card, setCard] = useState<IdataCardOneProduct>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoader } = useSelector(
    (state: IloaderDetailsProduct) => state.loaderDetailsProduct
  );
  const cardRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (e: Event): void => {
      if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
        navigate(`/${location.search}`);
        document.removeEventListener('click', handleClickOutside);
      }
    },
    [location.search, navigate]
  );

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
  }, [handleClickOutside]);

  useEffect((): void => {
    dispatch(chengeLoaderDetailsProduct(isLoading));
  }, [dispatch, isLoading]);

  useEffect((): void => {
    if (data) {
      const newCard: IdataCardOneProduct = {
        Brand: data.brand,
        Category: data.category,
        Rating: data.rating,
        Price: data.price,
        Stock: data.stock,
        DiscountPercentage: data.discountPercentage,
        Description: data.description,
      };
      setCard(newCard);
    }
  }, [data]);

  return (
    <section className={style.card_product} data-testid="page-product">
      {isLoader ? (
        <div className={style.section_grogu}>
          <Grogu />
        </div>
      ) : (
        <div>
          <button
            className={style.card_product_button}
            onClick={() => navigate(`/${location.search}`)}
            data-testid="DeleteCard"
          >
            <img
              className={style.button_img}
              src={DeleteLogo}
              alt="DeleteCard"
            />
          </button>
          {data && card ? (
            <div
              className={style.card_block}
              ref={cardRef}
              data-testid="card-block"
            >
              <div className={style.img_block}>
                <img
                  className={style.card_img}
                  src={data.images[0]}
                  alt={data.title}
                  data-testid="card-image"
                />
              </div>
              <div className={style.desc_block}>
                <p className={style.desc_block_title} data-testid="Title">
                  {data.title}
                </p>
                {Object.keys(card).map((keyCard) => {
                  return (
                    <div key={keyCard}>
                      {keyCard.charAt(0).toUpperCase() + keyCard.slice(1)}:
                      <span
                        className={style.desc_block_span}
                        data-testid={keyCard}
                      >
                        {card[keyCard as keyof IdataCardOneProduct]}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            'Product not Found!'
          )}
        </div>
      )}
    </section>
  );
}
