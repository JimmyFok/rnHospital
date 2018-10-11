// 'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
} from 'react-native';

// type Props = {};
export default class Health extends Component{
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.commentText}>
              直接引用已有的体检模块
          </Text>
        </View>
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
    container:{
      height: 600,
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    commentText:{
      fontSize: 28,
      lineHeight: 20,
      paddingTop: 8,
      textAlign:'center',
    },
});
