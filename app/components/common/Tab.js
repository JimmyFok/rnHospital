// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.

import React, { Component } from 'react';
import {StyleSheet,View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InhosInfo from './InhosInfo';
import PayInfo from './PayInfo';
import OneDayList from './OneDayList';


// tabnavigation的组件
import { createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';

// 通过这样来重新给组件进行样式的增加
const tabPage1 = ()=>
  <View style={[styles.tabpage,styles.iosShadow]}>
    <InhosInfo />
  </View>

const tabPage2 = ()=>
  <View style={[styles.tabpage,styles.iosShadow]}>
      <PayInfo />
  </View>

const tabPage3 = ()=>
  <View style={[styles.tabpage,styles.iosShadow]}>
      <OneDayList />
  </View>

const styles = StyleSheet.create(
  {
    tabpage:{
      flex: 1,
      marginTop: 14,
      marginLeft: 12,
      marginRight: 12,
      marginBottom: 12,
      //这两个样式是基于iPhone X下方圆角而调整的。
      borderBottomLeftRadius: 32,
      borderBottomRightRadius: 32,
      borderRadius: 5,
    },


    // 设置投影，只支持iOSborderRadius: 5,
    iosShadow: {
      // marginLeft: -10,
      // paddingLeft: 10,
      shadowColor: 'black',
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 0.1,
      shadowRadius: 5,
    },
  }
)

const Tab = createMaterialTopTabNavigator(
  {
    Home:{
      screen: tabPage1,
      navigationOptions:{
        tabBarLabel:'住院信息',
      },

    },
    Pay: {
      screen: tabPage2,
      navigationOptions:{
        tabBarLabel:'缴费信息',
      },

    },
    List: {
      screen: tabPage3,
      navigationOptions:{
        tabBarLabel:'一日清单',
      },

    },
  },
  {
    initialRouteName: 'Home',
    backBehavior: 'none',
    paths:{
      Home: './InhosInfo',
      Pay: './PayInfo',
      List: './UserInfo',
    },
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

export default Tab
