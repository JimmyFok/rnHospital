'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


import {LogoTitle, Userinfo, FunBtn}  from '../components';

// type Props = {};

const datas = [
    {
      dataUrl: require("../images/fun-1.png"),
      funName: '预约挂号',
    },
    {
      dataUrl: require("../images/fun-2.png"),
      funName: '当天挂号',
    },
    {
      dataUrl: require("../images/fun-3.png"),
      funName: '门诊订单',
    },
    {
      dataUrl: require("../images/fun-4.png"),
      funName: '处方缴费',
    },
    {
      dataUrl: require("../images/fun-5.png"),
      funName: '报告查询',
    },
  ]

class Outpatient extends Component{
  render() {
    return (
      <View style={styles.view}>
        <Userinfo navigation={this.props.navigation} style={styles.ViewBox }/>
        <ScrollView>
          <View style = {styles.funbtnbox}>
            <FlatList
                  style= { styles.list }
                  data = { datas }
                  numColumns = {2}
                  renderItem={({item})=>
                    <FunBtn navigation={this.props.navigation} style={styles.funbtn} url={item.dataUrl} name={item.funName}/>
                  }
                />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles= StyleSheet.create({
    view:{
      flex:1,
      alignItems: 'center',
    },
    ViewBox:{
      flex: 1,
    },
    funbtnbox:{
      flex:1,
      paddingTop: 14,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },

    funbtn:{
      width: 160,
      height: 128,
      margin: 8,
      backgroundColor: '#fff',
      borderRadius: 5,
    },
    list:{

    }

})

export default Outpatient
