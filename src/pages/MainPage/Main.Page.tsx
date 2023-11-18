import { createContext, useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useSearchParams } from 'react-router-dom';
import { ApiService } from '../../api/Api';
import { AllCardMain } from '../../components/AllCardMain/AllCardMain';
import { Grogu } from '../../components/Grogu/Grogu';
import { Header } from '../../components/Header/Header';
import { LimitItem } from '../../components/LimitItem/LimitItem';
import { Pagination } from '../../components/Pagination/Pagination';
import { Search } from '../../components/Search/Search';
import { IdataApi } from '../../store/reducers/apiDataReducer';
import { IdataProduct } from '../../type/interfaces.interface';
import style from './_mainpage.module.scss';

// type UpdateLimitFunction = (
//   event: React.ChangeEvent<HTMLSelectElement>
// ) => void;

// type UpdateSearchFunction = (search: string) => void;

// type UpdatePageFunction = (page: number) => void;
export interface IMainContextData {
  countItemData: number;
  arrProducts: IdataProduct[];
  // handleChangeSelect: UpdateLimitFunction;
  // handleUpdatePage: UpdatePageFunction;
}

export const MainContext = createContext<IMainContextData>({
  countItemData: 1,
  arrProducts: [],
  // handleChangeSelect: () => {}
  // handleUpdatePage: () => {},
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
  const {searchValue, numberPage, countLimit} = useSelector((state:IdataApi) => state.apiData);
  const [searchParams, setSearchParams] = useSearchParams();
  const [arrProducts, setArrProducts] = useState<IdataProduct[]>([]);
  const [groguSpinner, setGroguSpinner] = useState<boolean>(true);
  const [countItemData, setCountItemData] = useState<number>(0);
  console.log(searchParams.get('page'));
  // const [countPage, setCountPage] = useState<number>(
  //   Number(searchParams.get('page')) || 1
  //  );
  // const [dataSearch, setDataSearch] = useState<string>(value);
  // const [selectedValue, setSelectedValue] = useState(countLimit);

  // const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setSelectedValue(Number(event.target.value));
  //   setCountPage(1);
  // };

  // const handleUpdateSearch = (search: string): void => {
  //   if (search !== dataSearch) {
  //     setDataSearch(search);
  //     setCountPage(1);
  //   }
  // };

  useEffect((): void => {
    setSearchParams({
      limit: '' + countLimit,
      page: '' + numberPage,
      search: '' + searchValue,
    });

    setGroguSpinner(true);
    ApiService(searchValue, countLimit, numberPage - 1).then((response) => {
      setGroguSpinner(false);
      setCountItemData(response.total);
      setArrProducts(response.products);
    });
  }, [countLimit, numberPage, searchValue, setSearchParams]);

  // const handleUpdatePage = (page: number): void => {
  //   setCountPage(page);
  // };

  return (
    <MainProvider
      value={{
        countItemData,
        arrProducts,
        // handleUpdatePage,
        // handleChangeSelect
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
