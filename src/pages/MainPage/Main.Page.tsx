import { useEffect, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { ApiService } from '../../api/Api';
import { AllCardMain } from '../../components/AllCardMain/AllCardMain';
import { Grogu } from '../../components/Grogu/Grogu';
import { Header } from '../../components/Header/Header';
import { LimitItem } from '../../components/LimitItem/LimitItem';
import { Pagination } from '../../components/Pagination/Pagination';
import { Search } from '../../components/Search/Search';
import { IdataProduct } from '../../type/interfaces';
import style from './_mainpage.module.scss';

export function MainPage(): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const [arrProducts, setArrProducts] = useState<IdataProduct[]>([]);
  const [groguSpinner, setGroguSpinner] = useState<boolean>(true);
  const [countItemData, setCountItemData] = useState<number>(0);
  const [countPage, setCountPage] = useState<number>(
    Number(searchParams.get('page')) || 1
  );
  const [dataSearch, setDataSearch] = useState<string>(
    searchParams.get('search') || ''
  );
  const [selectedValue, setSelectedValue] = useState(
    Number(searchParams.get('limit')) || 10
  );

  const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(Number(event.target.value));
    setCountPage(1);
  };

  const handleUpdateSearch = (search: string): void => {
    if (search !== dataSearch) {
      setDataSearch(search);
      setCountPage(1);
    }
  };

  useEffect((): void => {
    setSearchParams({
      limit: '' + selectedValue,
      page: '' + countPage,
      search: '' + dataSearch,
    });
    console.log(
      'изменение!',
      'limit: ' + selectedValue,
      'page:' + countPage,
      'search:' + dataSearch
    );

    setGroguSpinner(true);
    ApiService(dataSearch, selectedValue, countPage - 1).then((response) => {
      setGroguSpinner(false);
      setCountItemData(response.total);
      setArrProducts(response.products);
    });
  }, [countPage, dataSearch, selectedValue, setSearchParams]);

  const handleUpdatePage = (page: number): void => {
    setCountPage(page);
  };

  return (
    <section className={style.main}>
      <Header />
      <section className={style.main_option}>
        <LimitItem
          selectedValue={selectedValue}
          handleChange={handleChangeSelect}
        />
        <Search
          handleUpdateSearch={handleUpdateSearch}
          dataSearch={dataSearch}
        />
      </section>
      {groguSpinner ? (
        <div className={style.main_grogu}>
          <Grogu />
        </div>
      ) : (
        <div className={style.main_section}>
          <div className={style.main_container}>
            <AllCardMain allProducts={arrProducts} />
            <Pagination
              datalimit={Number(selectedValue)}
              countPage={arrProducts.length ? countPage : 1}
              countItem={arrProducts.length ? countItemData : 1}
              handleUpdatePage={handleUpdatePage}
            />
          </div>
          <Outlet />
        </div>
      )}
    </section>
  );
}
