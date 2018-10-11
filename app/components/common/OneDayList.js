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
import ListItem from './ListItem'
import { withNavigation } from 'react-navigation';

// const data = {
//   open: 'ios-arrow-down-outline',
//   close: 'ios-arrow-up-outline',
// }

class OneDayInfo extends Component{
  constructor(){
    super()
    this.state = {
      onOff: false,
      icontf: 'ios-arrow-down-outline',
      allitem: {
        check: '检查费',
        inhos: '住院床位费',
        machine: '机械费',
      },
      itemcost: {
        check: '120.00',
        inhos: '160.00',
        machine: '250.00',
      }
    }
    this.navigationOptions = {
      
    }
  }

  changetf(){
    this.state.onOff = !this.state.onOff
    if (!this.state.onOff){
      this.setState({
        icontf: 'ios-arrow-down-outline',
        show: {'display': 'flex'},
      })
    }else{
      this.setState({
        icontf: 'ios-arrow-up-outline',
        show: {'display': 'none'},
      })
    }
  }

  render(){
    return(
      <View style = {styles.container}>
        <TabTitleThree/>
        // 日期list
        <TouchableOpacity
          style = {styles.paylist}
          title = ""
          onPress={ this.changetf.bind(this) } >
          <Text style={styles.paylisttitle}>2018-04-02  周一</Text>
          <Ionicons name={this.state.icontf} style={styles.paylisticons} />
        </TouchableOpacity>

        // list详情
        <View style = {[styles.item,this.state.show]}>
          <ListItem itemname={this.state.allitem.check} itemcost={this.state.itemcost.check}/>
          <ListItem itemname={this.state.allitem.inhos} itemcost={this.state.itemcost.inhos}/>
          <ListItem itemname={this.state.allitem.machine} itemcost={this.state.itemcost.machine}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  // 背景块，
  container:{
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 5,
    alignItems:'stretch',
  },

  // 标题块


  // 内控快块
  content:{
    paddingBottom: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    height: 136,
    paddingTop: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#DFE3E9',
  },
  paybtn:{
    paddingTop: 12,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    borderRightWidth: 0.5,
    borderRightColor: '#DFE3E9',
  },
  paybtnlast:{
    borderRightWidth: 0,
  },
  payicon:{
    height: 36,
    width: 36,
    marginBottom: 4,
  },
  paytext:{
    flex: 1,
  },
  paytexttitle:{
    fontSize: 16,
    color: '#354052',
    lineHeight: 32,
    textAlign: 'right',
    alignSelf: 'flex-start',
  },
  paytextmoney:{
    fontSize: 15,
    color: '#7F8FA4',
    textAlign: 'center',
  },
  item:{
    backgroundColor: '#FDFBFB',
  },

  paylist:{
    flexDirection: 'row',
    paddingLeft: 12,
    paddingRight: 12,
    height: 54,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderBottomColor: '#DFE3E9',
    borderBottomWidth: 0.5,
  },
  paylisttitle:{
    flex: 1,
    fontSize: 16,
    paddingLeft: 4,
    color: '#354052',
  },
  paylisticons:{
    paddingRight: 4,
    fontSize: 20,
    color: '#7F8FA4',
  }
})

export default withNavigation(OneDayInfo)
