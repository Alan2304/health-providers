
import ProvidersContextProvider from './Providers/ProvidersContextProvider';

import Map from './Components/Map';

function App() {
  return (
    <ProvidersContextProvider>
      <Map />
    </ProvidersContextProvider>
  );
}

export default App;
