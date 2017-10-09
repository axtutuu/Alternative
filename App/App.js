import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import configureStore from './Stores/configureStore';
import { Provider }    from 'react-redux';

import Top   from './Components/Views/Top';
import Question   from './Components/Views/Question';

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="root">
            <Scene key="top" initial component={Top} />
            <Scene key="question" component={Question} hideNavBar={true}/>
          </Scene>
        </Router>
      </Provider>
    )
  }
}
