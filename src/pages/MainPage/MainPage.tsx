import { useEffect, useState } from 'react';
import { ApiService } from '../../api/Api';
import { Search } from '../../components/Search/Search';
import { Grogu } from '../../components/Grogu/Grogu';
import { CardOfPeople } from '../../components/CardOfPeople/CardOfPeople';
import { IdataPeople } from '../../type/interfaces';
import style from './_mainpage.module.scss';
import { Pagination } from '../../components/Pagination/Pagination';
import { LimitItem } from '../../components/LimitItem/LimitItem';
import { Link, Outlet, useNavigate } from 'react-router-dom';

export function MainPage(): JSX.Element {
  const navigate = useNavigate();
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
    ApiService(countPage, dataSearch).then((response) => {
      setGroguSpinner(false);
      setCountItemData(response.count);
      setArrPeoples(response.results);
    });
  }, [countItemData, countPage, dataSearch]);

  const handleUpdateSearch = (search: string): void => {
    localStorage.setItem('searchQuery', search);
    if (search !== dataSearch && search !== '') {
      setDataSearch(search);
      setCountPage(1);
    }

    if (search === '') {
      navigate(`/page=1/`);
    } else {
      navigate(`/page=1&search=${search}/`);
    }
  };

  const handleUpdatePage = (page: number): void => {
    localStorage.setItem('countPage', page.toString());
    setCountPage(page);
    if (dataSearch === '') {
      navigate(`/page=${page}/`);
    } else {
      navigate(`/page=${page}&search=${dataSearch}/`);
    }
  };

  return (
    <section className={style.main}>
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
                    <Link
                      to={
                        dataSearch === ''
                          ? `/page=${countPage}/${numberPeople}`
                          : `/page=${countPage}&search=${dataSearch}/${numberPeople}`
                      }
                      key={index}
                    >
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
