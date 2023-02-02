import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { Progress } from '@chakra-ui/react';
import Root from 'router/Root';
import Home from 'pages/Home';

const About = lazy(async () => await import('pages/About'));
const Menu = lazy(async () => await import('pages/Menu'));
const Bookings = lazy(async () => await import('pages/Bookings'));
const OrderOnline = lazy(async () => await import('pages/OrderOnline'));
const Login = lazy(async () => await import('pages/Login'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/about',
        element: (
          <Suspense fallback={<Progress isIndeterminate />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: '/menu',
        element: (
          <Suspense fallback={<Progress isIndeterminate />}>
            <Menu />
          </Suspense>
        ),
      },
      {
        path: '/bookings',
        element: (
          <Suspense fallback={<Progress isIndeterminate />}>
            <Bookings />
          </Suspense>
        ),
      },
      {
        path: '/order-online',
        element: (
          <Suspense fallback={<Progress isIndeterminate />}>
            <OrderOnline />
          </Suspense>
        ),
      },
      {
        path: '/login',
        element: (
          <Suspense fallback={<Progress isIndeterminate />}>
            <Login />
          </Suspense>
        ),
      },
      { path: '*', element: <Navigate to="/" /> },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
