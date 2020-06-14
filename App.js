import React, {Component} from 'react';  
import Leaderboard from 'react-native-leaderboard';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';  
  
const instructions = Platform.select({  
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',  
  android:  
    'Double tap R on your keyboard to reload,\n' +  
    'Shake or press menu button for dev menu',  
});  


type Props = {};  
export default class App extends Component<Props> {  

  constructor(props) {
    super(props);
  this.state = {
    data: [
        {userName: 'L', highScore: 50},
        {userName: 'K', highScore: 120},
        {userName: 'I', highScore: 10},
        {userName: 'H', highScore: 160},
        {userName: 'G', highScore: 70},
        {userName: 'F', highScore: 90},
        {userName: 'E', highScore: 30},
        {userName: 'D', highScore: 50},
        {userName: 'C', highScore: 100},
        {userName: 'B', highScore: 60},
        {userName: 'J', highScore: 80},
        {userName: 'A', highScore: 130},
        {userName: 'N', highScore: 140},
        {userName: 'M', highScore: 130},
        //...
    ] //can also be an object of objects!: data: {a:{}, b:{}}
  };
}

  render() {  
    return (  
      <React.Fragment>
      <View style = { styles.container }></View>
      <Leaderboard 
        data={this.state.data} 
        sortBy='highScore' 
        labelBy='userName'
        marginBottom='50'>
      </Leaderboard>
      
      </React.Fragment>
      
      
    );  
  }  
}  
  
const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    justifyContent: 'center',  
    alignItems: 'center',  
    backgroundColor: '#9FA8DA',
    padding: 100,
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