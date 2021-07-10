
import ProvidersContextProvider from './Providers/ProvidersContextProvider';

import './App.scss';

function App() {
  return (
    <ProvidersContextProvider>
      <div className="App" />
    </ProvidersContextProvider>
  );
}

export default App;
