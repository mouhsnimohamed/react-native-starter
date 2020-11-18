import HomeScreen from './Home';
import TransactionsScreen from './Transactions';
import BeneficiariessScreen from './Beneficiaries';
import SettingsScreen from './Settings';
import { RootStackParamList } from '../../navigations/RootNavigation';

const iconHome = require('assets/images/homeIcon.png');
const iconBeneficiaries = require('assets/images/beneficiaries.png');
const iconTransactions = require('assets/images/transactions.png');
const iconSettings = require('assets/images/settings.png');

const tabNavigationData = [
  {
    name: RootStackParamList.Home,
    component: HomeScreen,
    icon: iconHome,
  },
  {
    name: RootStackParamList.Transactions,
    component: TransactionsScreen,
    icon: iconTransactions,
  },
  {
    name: RootStackParamList.Beneficiaries,
    component: BeneficiariessScreen,
    icon: iconBeneficiaries,
  },
  {
    name: RootStackParamList.Settings,
    component: SettingsScreen,
    icon: iconSettings,
  },
];

export default tabNavigationData;
