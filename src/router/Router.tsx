import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { Progress } from '@chakra-ui/react';
import Root from 'router/Root';
import Home from 'pages/Home';

const About = lazy(async () => await import('pages/About'));
const Menu = lazy(async () => await import('pages/Menu'));
const Reservations = lazy(async () => await import('pages/Reservations'));
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
          <Suspense fallback={<Progress />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: '/menu',
        element: (
          <Suspense fallback={<Progress />}>
            <Menu />
          </Suspense>
        ),
      },
      {
        path: '/reservations',
        element: (
          <Suspense fallback={<Progress />}>
            <Reservations />
          </Suspense>
        ),
      },
      {
        path: '/order-online',
        element: (
          <Suspense fallback={<Progress />}>
            <OrderOnline />
          </Suspense>
        ),
      },
      {
        path: '/login',
        element: (
          <Suspense fallback={<Progress />}>
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
