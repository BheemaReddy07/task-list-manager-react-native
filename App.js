
import { StyleSheet, View, StatusBar, SafeAreaView } from 'react-native';
import AppManager from './manager/AppManager';
import { PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"lightblue"} barStyle={'dark-content'} translucent={false} />
      <PaperProvider>
        <AppManager />
      </PaperProvider>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight,
    padding: 5
  },
});
