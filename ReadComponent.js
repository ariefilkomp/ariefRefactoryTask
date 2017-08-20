import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  Button,
  TextInput } from 'react-native';
import { UpdateComponent } from './UpdateComponent';
import { DeleteComponent } from './DeleteComponent';

  export class ReadComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = { postId: '1',userId: '1', title:'Title',body:'Body',url:'url',viewName:'' };
		this.readById = this.readById.bind(this);
	}

	componentDidMount() {
		return fetch('https://jsonplaceholder.typicode.com/posts/'+this.state.postId)
		.then((response) => response.json())
		.then((responseJson) => {
			this.setState({
				title:  responseJson.title,
				body: responseJson.body,
				postId: responseJson.id.toString(),
				userId: responseJson.userId,
			});
		})
		.catch((error) => {
			console.error(error);
		});
	}
	
	readById(){
		return fetch('https://jsonplaceholder.typicode.com/posts/'+this.state.postId)
		.then((response) => response.json())
		.then((responseJson) => {
			this.setState({
				title:  responseJson.title,
				body: responseJson.body,
				postId: responseJson.id.toString(),
				userId: responseJson.userId,
			}, function() {
			// do something with new state
			});
		})
		.catch((error) => {
			console.error(error);
		});
	}

	getView(vname,post) {
		this.setState({viewName:vname});
	}
	render (){

		if(this.state.viewName == 'update')
			theView = (<View>
				<Button
					onPress={() => this.getView("<<back")}
					title="<<back"
					color="#045adb"
					accessibilityLabel="<<back"
				/>
				<UpdateComponent postId={this.state.postId} userId={this.state.userId} />
				</View>);
		else if(this.state.viewName == 'delete')
			theView = (<View>
				<Button
					onPress={() => this.getView("<<back")}
					title="<<back"
					color="#045adb"
					accessibilityLabel="<<back"
				/>
				<DeleteComponent postId={this.state.postId} userId={this.state.userId} />
				</View>);
		else
			theView = (
				<View>
					<View style={{justifyContent: 'center'}}>
						<Text style={{fontSize:20}}>READ FROM https://jsonplaceholder.typicode.com/posts/</Text>
					</View>
					<View style={{ flex: 1,flexDirection: 'row', justifyContent: 'flex-start'}}>
						<View> 
							<TextInput
								style={{height: 35, width:30, borderColor: 'gray', borderWidth: 1}}
								onChangeText={(postId) => this.setState({postId})}
								value={this.state.postId}
							/>	
						</View>
						<View style={{marginLeft:10}}>
							<Button
							onPress={() => this.readById()}
							title="Read this id!"
							color="#db9704"
							accessibilityLabel="Read this id!"
							/>
						</View>
					</View>
					<View>
						<Text style={{padding: 5, fontSize:18, fontWeight:'bold'}}>Title: {this.state.title }</Text>
						<Text style={{padding: 5}}>Body: {this.state.body }</Text>
					</View>
					<View style={{ flexDirection: 'row', justifyContent: 'space-around'}} >
						<Button
						onPress={() => this.getView("update")}
						title="update"
						color="#045adb"
						accessibilityLabel="update"
						/>
						<Button
						onPress={() => this.getView("delete")}
						title="delete"
						color="#db0407"
						accessibilityLabel="delete"
						/>
					</View>
				</View>);

		return (
		<View>
			{theView}
		</View>);
	}
  }