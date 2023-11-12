import { useRouteError } from 'react-router-dom';

interface IError {
  statusText: string;
  message: string;
}

export default function ErrorPage() {
  const error = useRouteError() as IError;
  console.error(error);

  return (
    <section className="error">
      <h2>The server has crashed!</h2>
      <h2>Reload the page!</h2>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </section>
  );
}
