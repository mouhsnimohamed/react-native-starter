import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigations/RootNavigation';

export interface HomeProps {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}
