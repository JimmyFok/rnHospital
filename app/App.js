/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import { View, Text , StyleSheet } from 'react-native';

// tabnavigation的组件
import { createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';

// 引入各个pages的组件
import Home from './pages/Home';
import Health from './pages/Health';
import Inhospital from './pages/Inhospital';
import Outpatient from './pages/Outpatient';
import Usercenter from './pages/Usercenter';
import HotTalk from './pages/HotTalk';
import DoctorList from './pages/DoctorList';

import { Userinfo,InhosInfo,PayInfo,OneDayList,UserinfoLogout} from './components';

import Octicons from 'react-native-vector-icons/Octicons';
import { withNavigation } from 'react-navigation';

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    flexGrow: 1,
  },
  topbtn:{
    fontSize: 24,
    paddingRight: 12,
    // width: 44,
    textAlign: 'center',
    color: '#F1EFB3',
    flexDirection: 'column',
  },
  topicons:{
    fontSize: 24,
    lineHeight: 44,
    textAlign: 'center',
    color: '#fff',
  },
  toptext:{
    fontSize: 12,
    lineHeight: 14,
  }
})

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



class InhosTab extends Component{
  render(){
    return (
      <View style={styles.container}>
        <Userinfo navigation={this.props.navigation}/>
        <ThreeTab/>
      </View>
    )
  }
}

// const InhosTabUp = createStackNavigator({
//   InhosTab: InhosTab,
//   Health: Health,
// },
// //   {
// //     headerTransparent: 'true',
// // }
// )

// 设置栈堆导航器

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Outpatient: Outpatient,
    Health: Health,
    Inhospital: InhosTab,
    ThreeTab: ThreeTab,
    Usercenter: Usercenter,
    HotTalk: HotTalk,
    PayInfo: PayInfo,
    UserinfoLogout: UserinfoLogout,
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      title: 'HJM Demo',
      headerRight: (
     <Text
        onPress={()=>alert('霍俊敏制作的demo')}
        color='#fff'
        style= {styles.topbtn}>
          <Octicons name='info' style={styles.topicons}/>
      </Text>

     ),
      headerStyle: {
        backgroundColor: '#2CA3A2',
      },
      headerTintColor: '#fff',
      headerTitleStyle:{
        fontWeight:'bold',
      },
    },
  }
);



class App extends Component{
  render(){
    return <RootStack />;
  }
}

export default App;
