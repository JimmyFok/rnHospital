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

import TabTitleTwo from './TabTitleTwo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { withNavigation } from 'react-navigation';
import {createStackNavigator} from 'react-navigation';
import Userinfo from './Userinfo'

class PayInfo extends Component{
  render(){
    return(
      <View style = {styles.container}>
        <TabTitleTwo/>
        <View style = {styles.content}>
          <TouchableOpacity style = {styles.paybtn}>
            <Image source = {require('../../images/tab3.png')} style={styles.payicon}/>
            <View style={styles.paytext}>
              <Text style={styles.paytexttitle}>已缴费</Text>
              <Text style={styles.paytextmoney}>¥3678</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.paybtn}>
            <Image source = {require('../../images/tab3.png')} style={styles.payicon}/>
            <View style={styles.paytext}>
              <Text style={styles.paytexttitle}>待缴费</Text>
              <Text style={styles.paytextmoney}>¥3678</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style = {[styles.paybtn, styles.paybtnlast]}>
            <Image source = {require('../../images/tab3.png')} style={styles.payicon}/>
            <View style={styles.paytext}>
              <Text style={styles.paytexttitle}>总费用</Text>
              <Text style={styles.paytextmoney}>¥3678</Text>
            </View>
          </TouchableOpacity>

        </View>
      <TouchableOpacity
        style = {styles.paylist}
        title="体检"
        onPress={() => this.props.navigation.navigate('Health')
        }>
        <Text style={styles.paylisttitle}>缴费信息</Text>
        <Ionicons name='ios-arrow-forward-outline' style={styles.paylisticons} />
      </TouchableOpacity>

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


  paylist:{
    flexDirection: 'row',
    paddingLeft: 12,
    paddingRight: 12,
    height: 54,
    alignItems: 'center',
    justifyContent: 'flex-start',
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

export default PayInfo
