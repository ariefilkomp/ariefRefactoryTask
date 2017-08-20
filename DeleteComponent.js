import React from 'react';
import { 
  	StyleSheet, 
  	Text, 
  	View, 
	Image, 
  	Button,
	TextInput } from 'react-native';

  export class DeleteComponent extends React.Component {
	 constructor(props){
      super(props);
      this.state = { postId: this.props.postId,userId:this.props.userId,title:'Title',body:'Body',url:'url' };
      this.doDelete = this.doDelete.bind(this);
      }

    doDelete(){
      return fetch('http://jsonplaceholder.typicode.com/posts/'+this.state.postId,{ 
		  method: 'DELETE'
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
      return fetch('https://jsonplaceholder.typicode.com/posts/'+this.props.postId)
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
					<Text style={{fontSize:20}}>DELETE THIS POST?</Text>
				</View>
				<View>
					<Text style={{padding: 5}}>Title: {this.state.title }</Text>
					<Text style={{padding: 5}}>Body: {this.state.body }</Text>
				</View>
				<View>
						<Button
						onPress={() => this.doDelete()}
						title="Delete"
						color="#db0407"
						accessibilityLabel="Delete"
						/>
				</View>
				<View>
					<Text style={{backgroundColor: '#42dfff'}}>Result:{this.state.result}</Text>
				</View>
			</View>);
		}
  }