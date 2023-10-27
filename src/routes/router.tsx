import { createBrowserRouter } from 'react-router-dom';
import Root from './root';
import ErrorPage from './error';
import ComplaintScreen from '../pages/Complaint/ComplaintsScreen';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/complaints',
        element: <ComplaintScreen />,
      },
    ],
  },
]);
