import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    let pic = {
      uri: 'https://4.bp.blogspot.com/-CK1MrYME-dY/WZUTEabJ0BI/AAAAAAAARgM/S-QR0EAhZVYN2xf4pz6pTANYrCNYREvpgCLcBGAs/s600/fotoku.jpg'
    };
    return (
      <View style={styles.container}>
        <Text>Name: Arief Adi Nugroho</Text>
        <Text>Refactory batch 5?</Text>
        <Image source={pic} style={{width: 193, height: 250}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
