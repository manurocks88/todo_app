import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Avatar } from 'react-native-elements';
import Header from './Components/header';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Header textIwant={'hello'}/>
              <Text style={styles.bigblue}>BRUDDAH</Text>
        <Text>( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)</Text>
        <Avatar
  size="xlarge"
  rounded
  source={{uri: "https://i.kym-cdn.com/entries/icons/original/000/025/067/ugandanknuck.jpg"}}
  onPress={() => console.log("DO YOU KNOW DA WAE")}
  activeOpacity={0.7}
/>
        <Button 
          title= {'ARE YOU THE QUEEN'} 
          onPress={() => { console.log('SPIT ON FAKE QUEEN') ; }}
          color= 'green'
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


bigblue: {
  color: 'red',
  fontWeight : 'bold',
  fontSize :  30,
  alignItems: 'center',
  },
});