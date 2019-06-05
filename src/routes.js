import { createAppContainer, createStackNavigator } from 'react-navigation';
import Main from './pages/main';
import Product from './pages/product';
const stack = createStackNavigator(
  {
    Main,
    Product,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#DA552F',
      },
      headerTintColor: '#FFF',
    },
  }
);

const App = createAppContainer(stack);

export default App;
