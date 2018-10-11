'use strict';

import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons'

class ClickItem extends Component{
  constructor(){
    super()
  }

  render(){
    const data = {
      listicon1: 'listicon1',
      listicon2: 'listicon2',
    }
    return(
      <TouchableOpacity
        style = {styles.list}
        title="体检">
        <Image source={this.props.itemimg} style={styles.itemlefticons} />
        <Text style={styles.itemtitle}>{this.props.itemname}</Text>
        <Ionicons name='ios-arrow-forward-outline' style={styles.itemrighticons} />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  list:{
    flexDirection: 'row',
    // paddingLeft: 12,
    // paddingRight: 12,
    height: 54,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderBottomColor: '#DFE3E9',
    borderBottomWidth: .5,
  },
  itemtitle:{
    flex: 1,
    fontSize: 16,
    paddingLeft: 8,
    color: '#354052',
  },
  itemlefticons:{
    marginLeft: 8,
    marginRight: 4,
    width: 20,
    height: 20,
    color: '#7F8FA4',
  },
  itemrighticons:{
    paddingRight: 12,
    fontSize: 20,
    color: '#7F8FA4',
  }
})

export default ClickItem
