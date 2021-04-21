import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <main>
          <div className="container main-wrapper">
            <Navigation />
            <div className="main-content">
              <Routes />
            </div>
          </div>
        </main>
      </Provider>
    </Router>
  );
}

export default App;
