
// mobile-app/App.js

import { Provider as PaperProvider } from 'react-native-paper';
import Toast from 'react-native-toast-message';


import AppNavigator from './src/AppNavigator';

export default function App() {
  return (
    <PaperProvider>
      <AppNavigator />
      <Toast />
    </PaperProvider>
  );
}
