import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import Skeleton from './components/Skeleton';

export default App = () => {
  return (
    <View style={{flex:1,justifyContent:'space-around'}}>
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    </View>
  );
};
