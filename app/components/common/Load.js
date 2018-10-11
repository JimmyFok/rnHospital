'use strict';

import React, { Component } from 'react';
import { StyleSheet,ActivityIndicator } from 'react-native';


// 加载中图标动画
class Load extends Component{
  render(){
    return(
      <ActivityIndicator
        size = 'large'
        style = {styles.loading}
        color = '#24BAB8'
      />
    )
  }
}

const styles = StyleSheet.create({
    loading:{
      position: 'absolute',
      // zIndex: 999,
      width: '100%',
      height: 80,
    }
})

export default Load;
