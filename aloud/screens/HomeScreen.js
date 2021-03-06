import * as WebBrowser from 'expo-web-browser';
import  React from 'react';
import { useState, useEffect } from 'react';
import { Card } from 'react-native-elements';
import axios from 'axios';
import CollectionsList from '../components/Lists/CollectionsList';
import RecordingsList from '../components/Lists/RecordingsList';
import RecentList from '../components/Lists/RecentList';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {

  const [collections, setHomeCollections] = useState([]);
  const [recordings, setHomeRecordings] = useState([]);
  const [recentlySaved, setRecentlySaved] = useState([]);

  useEffect(() => {
    const fetchContent = async () => {
      await axios.get('https://aloud-server.appspot.com/home/1')
        .then(response => {
          // setUsers(response.data[0].users);
          setRecentlySaved(response.data[0].recent[0].collections);
          setHomeCollections(response.data[0].collections);
          setHomeRecordings(response.data[0].recordings);
        })
        .catch(err => console.log('there was an axios err', err))
      };

    fetchContent();
  }, []);

  return (
    <View>
      <ScrollView
        contentContainerStyle={styles.contentContainer}>
        <Text style={{ marginLeft: 15 }}>recently saved</Text>
        <RecentList recentlySaved={recentlySaved} />
        <Text style={{ marginLeft: 15 }}>collections</Text>
        <CollectionsList collections={collections} />
        <Text style={{marginLeft: 15}}>recordings</Text>
        <RecordingsList recordings={recordings} /> 
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  title: 'aloud',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
