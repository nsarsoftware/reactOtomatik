 
import React, {Component} from 'react';
import {Platform, Button, StyleSheet, Text, View} from 'react-native';
import codePush from 'react-native-code-push';

  
export default class App extends Component {

  guncelle() {
    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React lkhjg</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Button title="Güncelle" onPress={this.guncelle()}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
