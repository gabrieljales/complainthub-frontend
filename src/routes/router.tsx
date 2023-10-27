import { createBrowserRouter } from 'react-router-dom';
import Root from './root';
import ErrorPage from './error';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [],
  },
]);
