'use strict';

import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import TabTitleThree from './TabTitleThree'
import Ionicons from 'react-native-vector-icons/Ionicons'

// const data = {
//   open: 'ios-arrow-down-outline',
//   close: 'ios-arrow-up-outline',
// }

class ListItem extends Component{
  constructor(){
    super()
    this.state = {
      onOff: false,
      icontf: 'ios-arrow-down-outline'
    }
  }

  changetf(){
    this.state.onOff = !this.state.onOff
    if (!this.state.onOff){
      this.setState({
        icontf: 'ios-arrow-down-outline'
      })
    }else{
      this.setState({
        icontf: 'ios-arrow-up-outline'
      })
    }
  }

  render(){
    return(
        <TouchableOpacity
          style = {styles.paylist}
          title = ""
          onPress={ this.changetf.bind(this) } >
          <Text style={styles.paylisttitle}>{this.props.itemname}（¥{this.props.itemcost}）</Text>
          <Text style={styles.paylistmore}>查看详情</Text>
        </TouchableOpacity>

    )
  }
}

const styles = StyleSheet.create({

  paylist:{
    flexDirection: 'row',
    marginLeft: 24,
    paddingRight: 12,
    height: 54,
    alignItems: 'center',
    justifyContent: 'flex-start',
    justifyContent: 'flex-start',
    borderBottomColor: '#DFE3E9',
    borderBottomWidth: 0.5,

  },
  paylisttitle:{
    flex: 1,
    fontSize: 16,
    color: '#7F8FA4',
  },
  paylistmore:{
    fontSize: 14,
    color: '#F6912C',
  }
})

export default ListItem
