import Router from 'router/Router';
import UIProvider from 'providers/UIProvider';

function App() {
  return (
    <div className="app" data-testid="app">
      <UIProvider>
        <Router />
      </UIProvider>
    </div>
  );
}

export default App;
