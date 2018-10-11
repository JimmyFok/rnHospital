'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

// tabnavigation的组件
import { createStackNavigator } from 'react-navigation';

import { Userinfo, InhosTab } from '../components';

class Inhospital extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Userinfo />
      <InhosTab/>
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    container:{
      display: 'flex',
      flexGrow: 1,
    },
    commentText:{
      alignSelf: 'center',
      fontSize: 14,
      lineHeight: 20,
      paddingTop: 8,
      textAlign:'center',
    },
  }
)



export default Inhospital
