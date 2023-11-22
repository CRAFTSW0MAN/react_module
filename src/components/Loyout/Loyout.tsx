import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import style from './_loyout.module.scss';

export function RootLayout(): JSX.Element {
  return (
    <section className={style.loyout}>
      <Header />
      <Outlet />
    </section>
  );
}
