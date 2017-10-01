import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Top extends React.Component {

  render() {
    console.log('render');
    return (
      <View style={styles.container}>
        <Text> Root </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
