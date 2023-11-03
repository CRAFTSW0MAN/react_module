import { ApiService } from '../../api/Api';
import { useEffect, useState } from 'react';
import { Search } from '../../components/Search/Search';
import './_main.module.scss';
import { IdataPeople } from '../../type/interfaces';
import style from './_main.module.scss';
import { Grogu } from '../../components/Grogu/Grogu';
import { CardOfPeople } from '../../components/CardOfPeople/CardOfPeople';

export function Main(): JSX.Element {
  const inputValueSearch = localStorage.getItem('searchQuery');
  const [arrPeoples, setArrPeoples] = useState<IdataPeople[]>([]);
  const [dataSearch, setDataSearch] = useState<string>(
    inputValueSearch ? inputValueSearch : ''
  );
  const [groguSpinner, setGroguSpinner] = useState<boolean>(false);

  useEffect(() : void => {
    setGroguSpinner(true);
    ApiService(dataSearch).then((response) => {
      setGroguSpinner(false);
      setArrPeoples(response);
    });
  }, [dataSearch]);

  const upDateArrPeoples = (search: string): void  => {
    localStorage.setItem('searchQuery', search);
    setDataSearch(search);
  };

  return (
    <section className={style.main}>
      <Search  upDateSearch ={upDateArrPeoples}/>
      {groguSpinner ? (
        <Grogu />
      ) : (
        <div className={style.main_container}>
          {arrPeoples.length ? (
            arrPeoples.map((elem: IdataPeople, index: number) => {
              return (
                <div key={index}>
                  <CardOfPeople
                    name={elem.name}
                    height={elem.height}
                    mass={elem.mass}
                    gender={elem.gender}
                    hair_color={elem.hair_color}
                    skin_color={elem.skin_color}
                  />
                </div>
              );
            })
          ) : (
            <div className={style.main_empty}>
              Unfortunately nothing was found for your request!
            </div>
          )}
        </div>
      )}
    </section>
  );
}
