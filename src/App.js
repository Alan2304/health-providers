
import ProvidersContextProvider from './Providers/ProvidersContextProvider';

import Map from './Components/Map';
import Header from './Components/Header';

function App() {
  return (
    <ProvidersContextProvider>
      <Header />
      <Map />
    </ProvidersContextProvider>
  );
}

export default App;
