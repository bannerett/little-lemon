import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import Router from 'router/Router';
import UIProvider from 'providers/UIProvider';
import store from 'store/store';

function App() {
  return (
    <div className="app" data-testid="app">
      <Provider store={store}>
        <HelmetProvider>
          <UIProvider>
            <Router />
          </UIProvider>
        </HelmetProvider>
      </Provider>
    </div>
  );
}

export default App;
