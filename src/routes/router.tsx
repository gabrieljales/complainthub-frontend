import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import ErrorPage from './Error';
import ComplaintScreen from '../pages/Complaint/ComplaintsScreen';
import LoginScreen from '../pages/Auth/LoginScreen';
import ProtectedRoute from './ProtectedRoute';
import NotFoundPage from './NotFound';
import RegisterScreen from '../pages/Users/RegisterScreen';
import UnprotectedRoute from './UnprotectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/login',
        element: (
          <UnprotectedRoute>
            <LoginScreen />
          </UnprotectedRoute>
        ),
      },
      {
        path: '/register',
        element: (
          <UnprotectedRoute>
            <RegisterScreen />
          </UnprotectedRoute>
        ),
      },
      {
        path: '/complaints',
        element: (
          <ProtectedRoute>
            <ComplaintScreen />
          </ProtectedRoute>
        ),
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
