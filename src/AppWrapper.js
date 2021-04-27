import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';

import Routes from './Routes';
import { useSelector } from 'react-redux';

function AppWrapper() {
  const { authorization } = useSelector(({ auth }) => auth);
  return (
    <>
      <Header authorization={authorization} />
      <main>
        <div className="container main-wrapper">
          <Navigation />
          <div className="main-content">
            <Routes />
          </div>
        </div>
      </main>
    </>
  );
}

export default AppWrapper;
