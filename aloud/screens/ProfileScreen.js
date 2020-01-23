import React, {useState} from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput
  } from 'react-native';
  import proData  from '../src/sampleProData';
  import collData  from '../src/sampleCollData';
  import recData  from '../src/sampleRecData';
  import {Avatar} from 'react-native-elements'

export default function ProfileScreen() {
  // const [proInfo, setInfo] = useState(0)
  // const [proName, setName] = useState(0)
  // const [proPic, setPic] = useState(0)
  // const [proBio, setBio] = useState(0)
  const [value, onChangeText] = React.useState('new name')
  const [edit, toggleEditMode] = useState('false')
  // toggleEditMode(false)
//   state = { 
//     'proInfo': proData[0].username,
//     'proName': proData[1].name_display,
//     'proPic': 'https://res.cloudinary.com/dahfjsacf/image/upload/v1579656042/qc35njypmtfvjt9baaxq.jpg',
//     'proBio': proData[1].bio,


  state = {
    'proInfo': proData[0].username,
    'proName': proData[0].name_display,
    'proPic': proData[0].url_image,
    'proBio': proData[0].bio,
    'collImg': collData[0].url_image,
    'recTitle': recData[0].title,
    'recDescription': recData[0].description,
    'recContent': recData[0].url_recording

  };
  // handleEditMode = handleEditMode.bind(this)

 const handleEditMode = ()=> {
   console.log('dot')
    if(edit === 'false'){
      toggleEditMode('true');
    } else{
      toggleEditMode('false');
    }
    console.log(edit)
  }
    const editName =  <TextInput
    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
    onChangeText={text => onChangeText(text)}
    value={value}/>

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>aloud</Text>
        <Text style={styles.instructions}>{this.state['proInfo']}'s Profile</Text>
        
        {edit === 'true' ? editName: <Text>@{this.state['proName']}</Text> }
        <Avatar onPress={() => {handleEditMode()}}
        rounded title ="Dot"
        size="large"
        source={{uri: this.state['proPic']}}
        />
        <Text>Bio: {this.state['proBio']}</Text>

        <Text> {this.state.proInfo}'s Collections</Text> 
      <Image
      source={{uri: this.state.collImg, width: 64, height: 64}} />
     <Text> {this.state.proInfo}'s Sounds</Text>
     <ScrollView>
      <Text>{this.state.recTitle}</Text>
      <Text>{this.state.recDescription} </Text>
      <View
      source={{uri: this.state.recContent, width: 64, height: 64}} />
      </ScrollView>
        {/* <Text style={styles.instructions}>{instructions}</Text> */}
      </View>
    );
  }


ProfileScreen.navigationOptions = {
  title: 'Profile',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center'
  },
  image: {
    width: 50, height: 50
  }
});