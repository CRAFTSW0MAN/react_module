import { IdataProduct } from '../../type/interfaces.interface';
import style from './_allcard.module.scss';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { CardOfProduct } from '../CardOfProduct/CardOfProduct';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeSearchValue,
  chengeCountLimit,
  chengeNumberPage,
  IdataApi,
} from '../../store/reducers/apiDataReducer';
import { useGetSearchQuery } from '../../api/Api';
import { useEffect } from 'react';
import { Grogu } from '../Grogu/Grogu';
import { Pagination } from '../Pagination/Pagination';
import {
  chengeLoaderAllProducts,
  IloaderAllProducts,
} from '../../store/reducers/LoaderAllProduct';

export function AllCardMain(): JSX.Element {
  const { searchValue, numberPage, countLimit } = useSelector(
    (state: IdataApi) => state.apiData
  );
  const { isLoader } = useSelector(
    (state: IloaderAllProducts) => state.loaderAllProducts
  );
  const { data, isLoading } = useGetSearchQuery({
    search: searchValue,
    limit: countLimit,
    skip: numberPage - 1,
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const countPage = Number(searchParams.get('page')) || 1;
  const limit = Number(searchParams.get('limit')) || 10;
  const search = searchParams.get('search') || '';
  const location = useLocation();

  useEffect((): void => {
    dispatch(chengeLoaderAllProducts(isLoading));
  }, [dispatch, isLoading]);

  useEffect((): void => {
    dispatch(changeSearchValue(search));
  }, [dispatch, search]);

  // useEffect((): void => {
  //   dispatch(chengeApiCountItem(data.total));
  // }, [data.total, dispatch]);

  useEffect((): void => {
    if (countPage !== 1) {
      dispatch(chengeNumberPage(countPage));
    }
    if (limit !== 10) {
      dispatch(chengeCountLimit(limit));
    }
  }, [countPage, dispatch, limit]);

  useEffect((): void => {
    setSearchParams({
      limit: '' + countLimit,
      page: '' + numberPage,
      search: '' + searchValue,
    });
  }, [countLimit, numberPage, searchValue, setSearchParams]);

  return (
    <div className={style.main_container}>
      {isLoader ? (
        <div className={style.main_grogu}>
          <Grogu />
        </div>
      ) : (
        <div className={style.main_allcard}>
          {data && data.products.length ? (
            data.products.map((elem: IdataProduct, index: number) => (
              <Link
                to={`/product/${elem.id}${location.search}`}
                key={index}
                data-testid="card-of-list"
              >
                <CardOfProduct title={elem.title} image={elem.images[0]} />
              </Link>
            ))
          ) : (
            <div className={style.main_empty}>
              Unfortunately nothing was found for your request!
            </div>
          )}
          <Pagination />
        </div>
      )}
    </div>
  );
}
