import React from 'react';
import {Actions} from 'react-native-router-flux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image
} from 'react-native';

export default class Question extends React.Component {
  submit() {
    console.log(this.state)
    if(this.state.answer == 1) {
      alert('success')
    }
  }

  render() {
    return (
      <View style={styles.container} fontFamily='Hiragino Kaku Gothic ProN'>
        <View style={styles.question}>
          <Text>問題#1</Text>
          <Text>？に当てはまる適切な数字を回答</Text>
          <Image source={require('../../Images/sample-question.png')} />
        </View>
        <View style={styles.answer}>
          <TextInput
            style={styles.answerInput}
            onChangeText={v => this.setState({answer: v}) }
          />
          <Button color="#841584"
            title='Answer'
            onPress={this.submit.bind(this)}
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
    justifyContent: 'space-between',
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
    minHeight: 100,
  },
  answerInput: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1
  }
});
