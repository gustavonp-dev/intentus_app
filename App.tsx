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

import PlannerView from './app/planner/ui/planner/planner_view';

const RootStack = createDrawerNavigator({
  screens: {
    Planner: PlannerView,
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
