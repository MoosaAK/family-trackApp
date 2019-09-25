import { createStackNavigator, createAppContainer } from 'react-navigation';

import Page from "./Page"
import Page2 from ".//Page2"

import Login from ".//Account/Login"
import Signup from ".//Account/Signup"

import NewCircle from './/components/NewCircle'
import CircleCreated from './/components/CircleCreated'
import MapView from './/components/MapView'
import sharing from './/components/sharing'



const MainNavigator = createStackNavigator({
  Login:
    { screen: Login },

  Signup: {
    screen: Signup
  },

  Page2: {
    screen: Page2
  },

  Page:
    { screen: Page },

  NewCircle:
    { screen: NewCircle },

  CircleCreated:
    { screen: CircleCreated },

  MapView:
    { screen: MapView },

  sharing:
    { screen: sharing },

},
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);

const App = createAppContainer(MainNavigator);

export default App;
