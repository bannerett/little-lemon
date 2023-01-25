import Router from 'router/Router';
import UIProvider from 'providers/UIProvider';

function App() {
  return (
    <UIProvider>
      <Router />
    </UIProvider>
  );
}

export default App;
