'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import Userinfo  from './Userinfo';
import InhosInfo  from './InhosInfo';
import PayInfo  from './PayInfo';
import OneDayList  from './OneDayList';


// tabnavigation的组件
import { createMaterialTopTabNavigator } from 'react-navigation';


// 设置tab的路由
const ThreeTab = createMaterialTopTabNavigator(
  {
    Left:{
      screen: InhosInfo,
      navigationOptions:{
        tabBarLabel:'住院信息',
      },
    },
    Mid: {
      screen: PayInfo,
      navigationOptions:{
        tabBarLabel:'缴费信息',
      },

    },
    Right: {
      screen: OneDayList,
      navigationOptions:{
        tabBarLabel:'一日清单',
      },
    },
  },
  {
    initialRouteName: 'Left',
    backBehavior: 'none',
    tabBarOptions: {

      inactiveTintColor: '#fff',
      activeTintColor: '#F1EFB3',
      // 这个Tab大组件的样式
      style:{
        height: 48,
        backgroundColor:  '#22B8B6',
        // alignCenter: 'center',
        borderTopWidth: .5,
        borderTopColor: 'rgba(255,255,255,0.5)',
      },
      // 标签选项卡底部行的样式对象
      indicatorStyle:{
        backgroundColor:  '#F1EFB3',
        marginBottom: 6,
        width: 40,
        position: 'absolute',
        left: '16.66%',
        marginLeft: -20,
      },
      // 标签文本的样式对象
      labelStyle:{
        fontSize: 15,
        fontWeight: '600',
      },
      // 每个Tab按钮的样式
      tabStyle:{
        alignItems: 'center',
      }
    },

  }
);



export default class InhosTab extends Component{
  render(){
    return(

      <View style={styles.container}>
        <Userinfo />
        <ThreeTab />
      </View>

    )
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
