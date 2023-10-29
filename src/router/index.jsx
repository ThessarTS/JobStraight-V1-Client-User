import { createBrowserRouter } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import DetailPage from '../pages/DetailPage';
import Layout from '../components/Layout';
import JobPage from '../pages/JobPage';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '/job',
        element: <JobPage />,
      },
      {
        path: '/job/:id',
        element: <DetailPage />,
      },
    ],
  },
]);

export default router;
