import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { RootLayout } from '../components/Loyout/Loyout';
import { MainPage } from '../pages/MainPage/MainPage';

import { PagePeople } from '../pages/PagePeople/PagePeople';
import { PagePeopleStart } from '../pages/PagePeople/PagePeopleStart';
import style from './_app.module.scss';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<MainPage />}>
        <Route path="/:params/" element={<PagePeopleStart />} />
        <Route path="/:params/:id" element={<PagePeople />} />
      </Route>
      <Route path="/:params/" element={<MainPage />} />
    </Route>
  )
);

export function App() {
  return (
    <section className={style.container}>
      <RouterProvider router={router} />
    </section>
  );
}
