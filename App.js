
import { StyleSheet, View, StatusBar } from 'react-native';
import AppManager from './manager/AppManager';
import { PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"lightblue"} barStyle={'dark-content'} translucent={false} />
      <PaperProvider>
        <AppManager />
      </PaperProvider>

    </View>
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
