import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ApiProduct } from '../../api/Api';
import { Grogu } from '../../components/Grogu/Grogu';
import { IdataCardOnePeople, IdataPeople } from '../../type/interfaces';
import style from './_pagePeople.module.scss';
import DeleteLogo from '/assets/images/delete.png';

export function PagePeople(): JSX.Element {
  const [groguSpinner, setGroguSpinner] = useState<boolean>(false);
  const [dataCard, setDataCard] = useState<IdataPeople>();
  const [card, setCard] = useState<IdataCardOnePeople>();
  const { id } = useParams();
  const { params } = useParams();
  const navigate = useNavigate();

  useEffect((): void => {
    setGroguSpinner(true);
    if (id) {
      ApiProduct(id).then((response) => {
        setGroguSpinner(false);
        setDataCard(response);
        const newCard: IdataCardOnePeople = {
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
    <section className={style.card_people}>
      {groguSpinner ? (
        <div className={style.section_grogu}>
          <Grogu />
        </div>
      ) : (
        <div>
          <Link to={`/${params}`} className={style.card_people_link}></Link>
          <div>
            <button
              className={style.card_people_button}
              onClick={() => navigate(`/${params}`)}
            >
              <img
                className={style.button_img}
                src={DeleteLogo}
                alt="DeleteCard"
              />
            </button>
            {dataCard && card ? (
              <div className={style.card_block}>
                <div className={style.img_block}>
                  <img
                    className={style.card_img}
                    src={dataCard.images[0]}
                    alt={dataCard.title}
                  />
                </div>
                <div className={style.desc_block}>
                  <div className={style.desc_block_title}>{dataCard.title}</div>
                  {Object.keys(card).map((keyCard) => {
                    return (
                      <div key={keyCard}>
                        {keyCard.charAt(0).toUpperCase() + keyCard.slice(1)}:
                        <span className={style.desc_block_span}>
                          {card[keyCard as keyof IdataCardOnePeople]}
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
        </div>
      )}
    </section>
  );
}
