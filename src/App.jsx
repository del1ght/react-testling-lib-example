import { Link } from 'react-router-dom';
import './App.css';
import { AppRouter } from './providers/router/AppRouter';

function App() {
  return (
    <>
      <div
        style={{
          marginBottom: '20px',
          display: 'flex',
          justifyContent: 'center',
          gap: '15px',
        }}
      >
        <Link data-testid='main-link' to='/'>
          main page
        </Link>
        <Link data-testid='about-link' to='/about'>
          about page
        </Link>
      </div>
      <AppRouter />
    </>
  );
}

export default App;
