import { Header } from '../components/Header/Header';
import { Main } from '../pages/Main/Main';
import style from './_app.module.scss';

export function App() {
  return (
    <div className={style.container}>
      <Header />
      <Main />
    </div>
  );
}
