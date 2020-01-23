import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import collData  from '../src/sampleCollData';
import Colors from '../constants/Colors';
import { Text, Platform, Image, TextInput, StatusBar, StyleSheet, View, ScrollView } from 'react-native';

export default function CollectionsListItem(props) {
  return (
   
    <Ionicons
      name={props.name}
      size={26}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}