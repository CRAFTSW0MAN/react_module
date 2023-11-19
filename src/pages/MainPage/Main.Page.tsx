import { Outlet } from 'react-router-dom';
import { AllCardMain } from '../../components/AllCardMain/AllCardMain';
import { Header } from '../../components/Header/Header';
import { LimitItem } from '../../components/LimitItem/LimitItem';
import { Search } from '../../components/Search/Search';
import style from './_mainpage.module.scss';

export function MainPage(): JSX.Element {
  return (
    <>
      <Header />
      <section className={style.main_option}>
        <LimitItem />
        <Search />
      </section>
      <div className={style.main_section}>
        <AllCardMain />
        <Outlet />
      </div>
    </>
  );
}
