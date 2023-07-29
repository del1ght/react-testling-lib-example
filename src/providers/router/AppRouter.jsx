import { Route, Routes } from 'react-router-dom';
import { AboutPage } from '../../pages/AboutPage';
import { MainPage } from '../../pages/MainPage';
import { NotFoundPage } from '../../pages/NotFoundPage';
import { UserPage } from '../../pages/UserPage';

const routerConfig = {
  main: {
    path: '/',
    element: <MainPage />,
  },
  about: {
    path: '/about',
    element: <AboutPage />,
  },
  user: {
    path: '/user/:id',
    element: <UserPage />,
  },
  notFound: {
    path: '*',
    element: <NotFoundPage />,
  },
};

export const AppRouter = () => {
  return (
    <Routes>
      {Object.values(routerConfig).map(({ path, element }) => {
        return <Route key={path} path={path} element={element} />;
      })}
    </Routes>
  );
};
