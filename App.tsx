/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { createStaticNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import HomeView from './app/ui/home/home_view';

const RootStack = createDrawerNavigator({
  screens: {
    Home: HomeView,
  },
});

const Navigation = createStaticNavigation(RootStack);

function App() {
  
  return (
    <SafeAreaProvider>
      <Navigation/>
    </SafeAreaProvider>
  );
}


export default App;
