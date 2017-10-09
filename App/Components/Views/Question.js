import React from 'react';
import {Actions} from 'react-native-router-flux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

export default class Question extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.question}>
          <Text>問題</Text>
          <Text>1+1は?</Text>
        </View>
        <View style={styles.answer}>
          <TextInput style={styles.answerInput}/>
          <Button color="#841584"
            title='Answer'
            onPress={() => console.log('answer')}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
    paddingVertical: 10,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  question: {
    backgroundColor: '#FFF',
    marginTop: 50,
    padding: 10,
    minHeight: 150,
    borderColor: '#ccc',
    borderWidth: 1,
    marginHorizontal: 10
  },
  answer: {
    backgroundColor: '#FFF',
    marginTop: 50,
    padding: 10,
    minHeight: 150,
  },
  answerInput: {
    height: 50,
    borderColor: '#fafafa',
    borderWidth: 1
  },
});
