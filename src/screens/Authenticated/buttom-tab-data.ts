import HomeScreen from './Home';
import TransactionsScreen from './Transactions';
import BeneficiariessScreen from './Beneficiaries';
import SettingsScreen from './Settings';

const iconHome = require('../../assets/images/homeIcon.png');
const iconBeneficiaries = require('../../assets/images/beneficiaries.png');
const iconTransactions = require('../../assets/images/transactions.png');
const iconSettings = require('../../assets/images/settings.png');

const tabNavigationData = [
  {
    name: 'Home',
    component: HomeScreen,
    icon: iconHome,
  },
  {
    name: 'Transactions',
    component: TransactionsScreen,
    icon: iconTransactions,
  },
  {
    name: 'Beneficiaries',
    component: BeneficiariessScreen,
    icon: iconBeneficiaries,
  },
  {
    name: 'Settings',
    component: SettingsScreen,
    icon: iconSettings,
  },
];

export default tabNavigationData;
