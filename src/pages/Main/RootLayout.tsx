import { useEffect, useState } from 'react';
import { ApiService } from '../../api/Api';
import { Search } from '../../components/Search/Search';
import { Grogu } from '../../components/Grogu/Grogu';
import { CardOfPeople } from '../../components/CardOfPeople/CardOfPeople';
import { IdataPeople } from '../../type/interfaces';
import style from './_main.module.scss';
import { Pagination } from '../../components/Pagination/Pagination';
import { LimitItem } from '../../components/LimitItem/LimitItem';
import { Header } from '../../components/Header/Header';
import { Link, Outlet } from 'react-router-dom';

export function RootLayout(): JSX.Element {
  const inputValueSearch = localStorage.getItem('searchQuery');
  const [arrPeoples, setArrPeoples] = useState<IdataPeople[]>([]);
  const [dataSearch, setDataSearch] = useState<string>(
    inputValueSearch ? inputValueSearch : ''
  );
  const [groguSpinner, setGroguSpinner] = useState<boolean>(true);
  const [countPage, setCountPage] = useState<number>(1);
  const [countItemData, setCountItemData] = useState<number>(0);

  useEffect((): void => {
    setGroguSpinner(true);
    console.log(countPage, dataSearch);
    ApiService(countPage, dataSearch).then((response) => {
      setGroguSpinner(false);
      setCountItemData(response.count);
      setArrPeoples(response.results);
    });
  }, [countItemData, countPage, dataSearch]);

  const handleUpdateSearch = (search: string): void => {
    localStorage.setItem('searchQuery', search);
    if (search !== dataSearch) {
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
      <Header />
      <LimitItem />
      <Search handleUpdateSearch={handleUpdateSearch} />
      <div className={style.main_section}>
        {groguSpinner ? (
          <div className={style.main_section_grogu}>
            <Grogu />
          </div>
        ) : (
          <div>
            <div className={style.main_container}>
              {arrPeoples.length ? (
                arrPeoples.map((elem: IdataPeople, index: number) => {
                  const numberPeople = elem.url
                    .split('/')
                    .filter(Boolean)
                    .pop();
                  return (
                    <Link to={`/${numberPeople}`} key={index}>
                      <CardOfPeople name={elem.name} />
                    </Link>
                  );
                })
              ) : (
                <div className={style.main_empty}>
                  Unfortunately nothing was found for your request!
                </div>
              )}
            </div>
            <Pagination
              countPage={arrPeoples.length ? countPage : 1}
              countItem={arrPeoples.length ? countItemData : 1}
              handleUpdatePage={handleUpdatePage}
            />
          </div>
        )}
        <Outlet />
      </div>
    </section>
  );
}
