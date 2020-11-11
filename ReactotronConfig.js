import AsyncStorage from '@react-native-async-storage/async-storage';
import Reactotron from 'reactotron-react-native';
import sagaPlugin from 'reactotron-redux-saga';

const reactotron = Reactotron;
reactotron
  .setAsyncStorageHandler(AsyncStorage)
  .configure()
  .useReactNative(sagaPlugin())
  .connect();

export default reactotron;
