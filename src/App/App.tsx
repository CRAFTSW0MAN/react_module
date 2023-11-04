import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { RootLayout } from '../pages/Main/RootLayout';
import { PagePeople } from '../pages/PagePeople/PagePeople';
import { PagePeopleStart } from '../pages/PagePeople/PagePeopleStart';
import style from './_app.module.scss';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<PagePeopleStart />} />
      <Route path="/:id" element={<PagePeople />} />
    </Route>
  )
);

export function App() {
  return (
    <section className={style.container}>
      <RouterProvider router={router} />
      {/* //   <Header />
    //   <Main /> */}
    </section>
  );
}
