import { SecondPage } from './SecondPage';
import { ThirdPage } from './ThirdPage';
import MainPage from './MainPage';

const routes = () => {
  return [
    { path: '/second_page', element: <SecondPage /> },
    { path: '/third_page', element: <ThirdPage /> },
    { path: '*', element: <MainPage /> },
  ];
};

export { routes };
