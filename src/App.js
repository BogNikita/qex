import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store/store';
import AppWrapper from './AppWrapper';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <AppWrapper/>
      </Provider>
    </Router>
  );
}

export default App;
