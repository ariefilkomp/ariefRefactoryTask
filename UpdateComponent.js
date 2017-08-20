import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  Button,
  TextInput } from 'react-native';

  export class UpdateComponent extends React.Component {
    constructor(props){
      super(props);
      this.state = { postId: this.props.postId,userId:this.props.userId,title:'Title',body:'Body',url:'url' };
      this.doUpdate = this.doUpdate.bind(this);
      }

    doUpdate(){
      return fetch('http://jsonplaceholder.typicode.com/posts/'+this.state.postId,{ 
          method: 'PUT',
          headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', },
          body: JSON.stringify({ id:this.state.postId, userId: this.state.userId, title: this.state.title, body: this.state.body })
        })
        .then((response) => response.json())
		    .then((responseJson) => {
          this.setState({result:JSON.stringify(responseJson)});
        })
        .catch((error) => {
          console.error(error);
        });
      }

    componentDidMount() {
      return fetch('https://jsonplaceholder.typicode.com/posts/'+this.state.postId)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
        title:  responseJson.title,
        body: responseJson.body,
        }, function() {
        // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
    }
    render (){
      return (
      <View>
        <View style={{justifyContent: 'center'}}>
          <Text style={{fontSize:20,fontWeight:'bold'}}>UPDATE POST!</Text>
        </View>
        <View style={{ flex: 1,flexDirection: 'column', justifyContent: 'space-around'}}>
          <View> 
            <Text > User Id : {this.state.userId}</Text>
            <Text > Post Id : {this.state.postId}</Text>
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
            onPress={() => this.doUpdate()}
            title="save"
            color="#045adb"
            accessibilityLabel="save"
            />
          </View>
        </View>
        <View style={{backgroundColor: '#42dfff'}}>
          <Text style={{padding: 5}}>Result: {this.state.result }</Text>
        </View>
      </View>);
    }
  }