import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  Button,
	TextInput } from 'react-native';

  export class CreateComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = { userId: '1',title:'Your Title',body:'Your Body',url:'url',result:'' };
      this.createPost = this.createPost.bind(this);
    }

    createPost(){
      return fetch('http://jsonplaceholder.typicode.com/posts',{ 
          method: 'POST',
          headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', },
          body: JSON.stringify({ userId: this.state.userId, title: this.state.title, body: this.state.body })
        })
        .then((response) => response.json())
		    .then((responseJson) => {
          this.setState({result:JSON.stringify(responseJson)});
        })
        .catch((error) => {
          console.error(error);
        });
      }


    render(){
      return (
      <View>
        <View style={{justifyContent: 'center'}}>
          <Text style={{fontSize:20}}>CREATE POST!</Text>
        </View>
        <View style={{ flex: 1,flexDirection: 'column', justifyContent: 'space-around'}}>
          <View> 
            <Text > User Id :</Text>
            <TextInput
              style={{height: 30, width:30, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(userId) => this.setState({userId})}
              value={this.state.userId}
            />	
          </View>
          <View> 
            <Text > Title :</Text>
            <TextInput
              style={{height: 30, width:200, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(title) => this.setState({title})}
              value={this.state.title}
            />	
          </View>
          <View> 
            <Text > Body :</Text>
            <TextInput
              style={{borderColor: 'gray', borderWidth: 1}}
              onChangeText={(body) => this.setState({body})}
              value={this.state.body}
              multiline = {true}
              numberOfLines = {4}
            />	
          </View>
          <View>
            <Button
            onPress={() => this.createPost()}
            title="save"
            color="#04db28"
            accessibilityLabel="save"
            />
          </View>
        </View>
        <View>
          <Text style={{padding: 5}}>Result: {this.state.result }</Text>
        </View>
      </View>);
    }
  }