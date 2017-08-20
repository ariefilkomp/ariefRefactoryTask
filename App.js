import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  Button,
  Dimensions,
  ScrollView } from 'react-native';

import { CreateComponent } from './CreateComponent';
import { ReadComponent } from './ReadComponent';
import { UpdateComponent } from './UpdateComponent';
import { DeleteComponent } from './DeleteComponent';

var { height } = Dimensions.get('window');
 
var box_count = 3;
var box_height = height / box_count;

 class ViewContainer extends React.Component {
   render(){
     let theView = <ReadComponent />;
     if(this.props.viewName == 'create')
        theView = <CreateComponent />;
     else if(this.props.viewName == 'read')
        theView = <ReadComponent />;
     else if(this.props.viewName == 'update')
        theView = <UpdateComponent />;
     else if(this.props.viewName == 'delete')
        theView = <DeleteComponent />;
    
     return (
          <View style={styles.boxView}> 
              {theView}
          </View>);
   }
 }

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {viewName:""}
    this.getView = this.getView.bind(this);
  }

  getView(vname) {
    this.setState({viewName:vname});
  }

  render() {
    let pic = {
      uri: 'https://4.bp.blogspot.com/-CK1MrYME-dY/WZUTEabJ0BI/AAAAAAAARgM/S-QR0EAhZVYN2xf4pz6pTANYrCNYREvpgCLcBGAs/s600/fotoku.jpg'
    };
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={[styles.box, styles.box1]}>
            <View style={styles.task1container}>
              <View>
                <Text style={{justifyContent: 'center'}}>Name :</Text>
                <Text style={{justifyContent: 'center', fontSize: 20}}>Arief Adi Nugroho</Text>
                <Text style={{justifyContent: 'center', fontSize: 18}}>Refactory batch 5?</Text>
              </View>
              <View>
                <Image source={pic} style={{width: 140, height: 180}}/>
              </View>
            </View>
          </View>
            <View style={ styles.box2 }>
              <View>
                <Button
                  onPress={() => this.getView("read")}
                  title="read"
                  color="#db9704"
                  accessibilityLabel="Read"
                />
              </View>
              <View style={{marginLeft:10}}>
                <Button
                  onPress={() => this.getView("create")}
                  title="create"
                  color="#04db28"
                  accessibilityLabel="Create"
                />
              </View>
            </View>
            <ViewContainer viewName={this.state.viewName} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  box: {
    height: box_height
  },
  box1: {
    backgroundColor: '#2196F3'
  },
  box2: {
    backgroundColor: '#8BC34A',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 10,
  },
  task1container:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 30
  },
  boxView:{
    padding:10
  }
});
