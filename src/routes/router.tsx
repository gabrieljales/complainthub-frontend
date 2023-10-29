import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import ErrorPage from './Error';
import ComplaintScreen from '../pages/Complaint/ComplaintsScreen';
import LoginScreen from '../pages/Auth/LoginScreen';
import ProtectedRoute from './ProtectedRoute';
import NotFoundPage from './NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/login',
        element: (
          <ProtectedRoute>
            <LoginScreen />
          </ProtectedRoute>
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
    ],
  },
  {
    path: '*',
    element: (
      <ProtectedRoute>
        <NotFoundPage />
      </ProtectedRoute>
    ),
  },
]);
