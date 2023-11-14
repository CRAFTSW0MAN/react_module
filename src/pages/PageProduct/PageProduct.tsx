import { useCallback, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { ApiProduct } from '../../api/Api';
import { Grogu } from '../../components/Grogu/Grogu';
import {
  IdataCardOneProduct,
  IdataProduct,
} from '../../type/interfaces..interface';
import style from './_pageproduct.module.scss';
import DeleteLogo from '/assets/images/delete.png';

export function PageProduct(): JSX.Element {
  const [groguSpinner, setGroguSpinner] = useState<boolean>(true);
  const [dataCard, setDataCard] = useState<IdataProduct>();
  const [card, setCard] = useState<IdataCardOneProduct>();
  const location = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
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
    setGroguSpinner(true);
    if (id) {
      ApiProduct(id).then((response) => {
        setGroguSpinner(false);
        setDataCard(response);
        const newCard: IdataCardOneProduct = {
          Brand: response.brand,
          Category: response.category,
          Rating: response.rating,
          Price: response.price,
          Stock: response.stock,
          DiscountPercentage: response.discountPercentage,
          Description: response.description,
        };
        setCard(newCard);
      });
    }
  }, [id]);

  return (
    <section className={style.card_product} data-testid="page-product">
      {groguSpinner ? (
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
          {dataCard && card ? (
            <div
              className={style.card_block}
              ref={cardRef}
              data-testid="card-block"
            >
              <div className={style.img_block}>
                <img
                  className={style.card_img}
                  src={dataCard.images[0]}
                  alt={dataCard.title}
                  data-testid="card-image"
                />
              </div>
              <div className={style.desc_block}>
                <p className={style.desc_block_title} data-testid="Title">
                  {dataCard.title}
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
            ''
          )}
        </div>
      )}
    </section>
  );
}
