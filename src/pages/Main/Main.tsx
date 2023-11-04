import { useEffect, useState } from 'react';
import { ApiService } from '../../api/Api';
import { Search } from '../../components/Search/Search';
import { Grogu } from '../../components/Grogu/Grogu';
import { CardOfPeople } from '../../components/CardOfPeople/CardOfPeople';
import { IdataPeople } from '../../type/interfaces';
import style from './_main.module.scss';
import { Pagination } from '../../components/Pagination/Pagination';
import { LimitItem } from '../../components/LimitItem/LimitItem';


export function Main(): JSX.Element {
  const inputValueSearch = localStorage.getItem('searchQuery');
  const [arrPeoples, setArrPeoples] = useState<IdataPeople[]>([]);
  const [dataSearch, setDataSearch] = useState<string>(
    inputValueSearch ? inputValueSearch : ''
  );
  const [groguSpinner, setGroguSpinner] = useState<boolean>(false);
  const [countPage,setCountPage]= useState<number>(1);
  const [countItemData,setCountItemData]= useState<number>(0);

  useEffect((): void => {
    setGroguSpinner(true);
    console.log(countPage, dataSearch)
    ApiService(countPage, dataSearch).then((response) => {
      setGroguSpinner(false);
      setCountItemData(response.count);
      setArrPeoples(response.results);
    });
  }, [countItemData, countPage, dataSearch]);

  const handleUpdateSearch = (search: string): void => {
    localStorage.setItem('searchQuery', search);
    if(search!==dataSearch){
      setDataSearch(search);
      setCountPage(1);
    }
  };

  const handleUpdatePage = (page: number): void => {
    localStorage.setItem('countPage', page.toString());
    setCountPage(page);
  };

  return (
    <section className={style.main}>
      <LimitItem/>
      <Search handleUpdateSearch={handleUpdateSearch} />
      {groguSpinner ? (
        <Grogu />
      ) : (
        <div>
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
            <Pagination  countPage ={arrPeoples.length?countPage:1 }countItem={arrPeoples.length?countItemData:1} handleUpdatePage={handleUpdatePage}/>
        </div>
      )}
    </section>
  );
}
