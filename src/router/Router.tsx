import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { Progress } from '@chakra-ui/react';
import Root from 'router/Root';
import Home from 'pages/Home';

const About = lazy(async () => await import('pages/About'));

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
      { path: '*', element: <Navigate to="/" /> },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
