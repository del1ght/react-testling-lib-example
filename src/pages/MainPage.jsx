import { Counter } from '../components/Counter/Counter';
import { Users } from '../components/Users/Users';

export const MainPage = () => {
  return (
    <div data-testid='main-page'>
      <p>MainPage</p>
      <Counter />
      <Users />
    </div>
  );
};
