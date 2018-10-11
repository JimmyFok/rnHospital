'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

// type Props = {};
export default class Health extends Component{
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.commentText}>
            热议话题
          </Text>
          <Button
            title="Go to Health"
            onPress={() => this.props.navigation.push('Inhospital')}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
});
