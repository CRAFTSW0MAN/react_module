import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ApiPeople } from '../../api/Api';
import { Grogu } from '../../components/Grogu/Grogu';
import { peopleImages } from '../../components/peopleImages/peopleImages';
import { IdataPeople } from '../../type/interfaces';
import style from './_pagePeople.module.scss';
import DeleteLogo from '/assets/images/delete.png';

export function PagePeople(): JSX.Element {
  const [groguSpinner, setGroguSpinner] = useState<boolean>(false);
  const [card, setCard] = useState<IdataPeople>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect((): void => {
    setGroguSpinner(true);
    if (id) {
      ApiPeople(id).then((response) => {
        setGroguSpinner(false);
        setCard(response);
        console.log(response);
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
          <button
            className={style.card_people_button}
            onClick={() => navigate('/')}
          >
            <img
              className={style.button_img}
              src={DeleteLogo}
              alt="DeleteCard"
            />
          </button>
          {card ? (
            <div className={style.card_block}>
              <div className={style.img_block}>
                <img
                  className={style.card_img}
                  src={
                    !!peopleImages[`${card.name}`]
                      ? peopleImages[`${card.name}`]
                      : peopleImages['no Icon']
                  }
                  alt={card.name}
                />
              </div>
              <div className={style.desc_block}>
                <div className={style.desc_block_title}>{card.name}</div>
                <div className={style.desc_block_birth_year}>
                  Birth Year:{' '}
                  <span className={style.desc_block_span}>
                    {card.birth_year === 'unknown' ? 'n/a' : card.birth_year}
                  </span>
                </div>
                <div className={style.desc_block_height}>
                  Height:{' '}
                  <span className={style.desc_block_span}>
                    {card.height === 'unknown' ? 'n/a' : card.height} cm
                  </span>
                </div>
                <div className={style.desc_block_mass}>
                  Mass:{' '}
                  <span className={style.desc_block_span}>
                    {card.mass === 'unknown' ? 'n/a' : card.mass} kg
                  </span>
                </div>
                <div className={style.desc_block_gender}>
                  Gender:{' '}
                  <span className={style.desc_block_span}>
                    {card.gender === 'unknown' ? 'n/a' : card.gender}
                  </span>
                </div>
                <div className={style.desc_block_eye_color}>
                  Eye Color:{' '}
                  <span className={style.desc_block_span}>
                    {card.eye_color === 'unknown' ? 'n/a' : card.eye_color}
                  </span>
                </div>
                <div className={style.desc_block_hair_color}>
                  Hair Color:{' '}
                  <span className={style.desc_block_span}>
                    {card.hair_color === 'unknown' ? 'n/a' : card.hair_color}
                  </span>
                </div>
                <div className={style.desc_block_skin_color}>
                  Skin Color:{' '}
                  <span className={style.desc_block_span}>
                    {card.skin_color === 'unknown' ? 'n/a' : card.skin_color}
                  </span>
                </div>
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
