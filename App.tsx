/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SafeAreaProvider, SafeAreaView }  from 'react-native-safe-area-context';
import Navigation from './app/shared/ui/components/blueprints/navigation';
import { StyleSheet } from "react-native";

function App() {
  
  return (
    <SafeAreaProvider>
     <SafeAreaView style={styles.container}>
        <Navigation/>
     </SafeAreaView>
    </SafeAreaProvider>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
