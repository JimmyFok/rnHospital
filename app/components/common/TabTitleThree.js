'use strict';

import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native';



class TabTitleThree extends Component{
  constructor(){
    super()
  }

  render(){
    return(
      <View style = {styles.title}>
          <Image source = {require('../../images/tab3.png')} style={styles.titleicon}/>
        <Text style = {styles.titletext}>一日清单列表</Text>
          <Text style = {styles.titleid}></Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  // 背景块，
  title:{
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'rgba(36,186,184,0.5)',
    borderBottomWidth: .5,
    paddingLeft: 12,
    paddingRight: 12,
  },

  titleicon:{
    width: 36,
    height: 36,
  },

  titletext:{
    flex: 1,
    marginLeft: 12,
    fontWeight: '600',
    fontSize: 16,
    color: '#24BAB8',
  },
  titleid:{
    flex: 1,
    color: '#7F8FA4',
    textAlign: 'right',
    fontSize: 15,
  },

})

export default TabTitleThree
