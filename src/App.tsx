import { NextUIProvider, createTheme } from '@nextui-org/react';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import './App.css';
import { ConnectionComponent } from './components/ConnectionComponent';
import Application from './components/Application';
import { AppStoreProvider } from './store/AppStore';
import { THEME } from './env/CONSTANTS';

const theme = createTheme({
  type: THEME,
  theme: {
    colors: {
      primaryLight: '$green200',
      primaryLightHover: '$green300',
      primaryLightActive: '$green400',
      primaryLightContrast: '$green600',
      primary: '#4ADE7B',
      primaryBorder: '$green500',
      primaryBorderHover: '$green600',
      primarySolidHover: '$green700',
      primarySolidContrast: '$white',
      primaryShadow: '$green500',
      gradient:
        'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      link: '#5E1DAD',
      myColor: '#ff4ecd',
    },
    space: {},
    fonts: {},
  },
});

function App() {
  const [connection, setConnection] = useState(false);

  return (
    <NextUIProvider theme={theme}>
      {!connection ? (
        <ConnectionComponent setConnection={setConnection} />
      ) : (
        <AppStoreProvider>
          <Application />
        </AppStoreProvider>
      )}
    </NextUIProvider>
  );
}

export default App;
