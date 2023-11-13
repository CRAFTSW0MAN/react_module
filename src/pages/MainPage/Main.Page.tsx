import { createContext, useContext, useEffect, useState } from 'react';
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

type UpdateLimitFunction = (
  event: React.ChangeEvent<HTMLSelectElement>
) => void;

type UpdateSearchFunction = (search: string) => void;

type UpdatePageFunction = (page: number) => void;
export interface IMainContextData {
  countPage: number;
  dataSearch: string;
  selectedValue: number;
  countItemData: number;
  arrProducts: IdataProduct[];
  handleChangeSelect: UpdateLimitFunction;
  handleUpdateSearch: UpdateSearchFunction;
  handleUpdatePage: UpdatePageFunction;
}

export const MainContext = createContext<IMainContextData>({
  countPage: 1,
  dataSearch: '',
  selectedValue: 10,
  countItemData: 1,
  arrProducts: [],
  handleChangeSelect: ( ) => {},
  handleUpdateSearch:  () => {},
  handleUpdatePage:  () => {},
});

export const MainProvider = MainContext.Provider;

export interface IMainConsumerProps {
  children: (data: IMainContextData) => React.ReactElement;
}

export const MainConsumer = (props: IMainConsumerProps) => {
  const data = useMainContext();

  return props.children(data);
};

export const useMainContext = () => {
  const data = useContext(MainContext);

  if (!data) {
    throw new Error('Can not `useMainContext` outside of the `MainProvider`');
  }

  return data;
};

export function MainPage(): JSX.Element {
  const inputValueSearch = localStorage.getItem('searchQuery');
  const [searchParams, setSearchParams] = useSearchParams();
  const [arrProducts, setArrProducts] = useState<IdataProduct[]>([]);
  const [groguSpinner, setGroguSpinner] = useState<boolean>(true);
  const [countItemData, setCountItemData] = useState<number>(0);
  const [countPage, setCountPage] = useState<number>(
    Number(searchParams.get('page')) || 1
  );
  const [dataSearch, setDataSearch] = useState<string>(
    inputValueSearch ? inputValueSearch : searchParams.get('search') || ''
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
    <MainProvider
      value={{
        countPage,
        countItemData,
        dataSearch,
        selectedValue,
        arrProducts,
        handleUpdatePage,
        handleChangeSelect,
        handleUpdateSearch,
      }}
    >
      <Header />
      <section className={style.main_option}>
        <LimitItem />
        <Search />
      </section>
      {groguSpinner ? (
        <div className={style.main_grogu}>
          <Grogu />
        </div>
      ) : (
        <div className={style.main_section}>
          <div className={style.main_container}>
            <AllCardMain />
            <Pagination />
          </div>
          <Outlet />
        </div>
      )}
    </MainProvider>
  );
}
