import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import { MainPage } from '../pages/MainPage/Main.Page';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import { PageProduct } from '../pages/PageProduct/PageProduct';

import style from './_app.module.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/product/:id',
        element: <PageProduct />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export function App() {
  return (
    <section className={style.container} data-testid="app">
      <RouterProvider router={router} />
    </section>
  );
}
