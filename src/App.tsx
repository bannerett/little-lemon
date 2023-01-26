import { HelmetProvider } from 'react-helmet-async';
import Router from 'router/Router';
import UIProvider from 'providers/UIProvider';

function App() {
  return (
    <div className="app" data-testid="app">
      <HelmetProvider>
        <UIProvider>
          <Router />
        </UIProvider>
      </HelmetProvider>
    </div>
  );
}

export default App;
