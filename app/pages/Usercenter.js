'use strict';

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  ActivityIndicator,
  Button,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

// 引入所需组件
import {FunCenter,Load,Recom,Comment,Banner,ClickItem} from '../components';

// react-native-vector-icons插件引入
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';



const iconsdata = {
    icon1: require('../images/listicon1.png'),
    icon2: require('../images/listicon2.png'),
}

export default class Home extends Component<Props> {

   static navigationOptions = ({ navigation }) => {
     return{
       title: navigation.getParam('index','用户中心'),
       headerRight: (<Text
         onPress={()=>alert('这是一个设置按钮！')}
         color='#fff'
         style={styles.topbtn}
       ><Entypo name='location-pin' style={styles.topicons}/><Text style={{'fontSize':15, 'color': '#fff', 'marginLeft':10 }}>广州</Text></Text>

      ),
       headerStyle:{
         backgroundColor: '#2CA3A2',
         // opacity: 0,
       },
       headerTintColor: 'black',
       headerTitleStyle: {
         fontWeight: 'bold',
         color:'white',
       },
       //需要注释背景颜色才有效
       // headerTransparent: 'true',

     }
   };


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.usertitle}>
          <ImageBackground source={require('../images/userbg.png')} style = {styles.userbg}>
            <Image source={require('../images/userFace.png')}  style = {styles.userface}></Image>
            <Text style = {styles.text}>某某某某</Text>
          </ImageBackground>
        </View>
        <FunCenter style= {styles.fun} navigation={this.props.navigation}/>
        <View  style={[styles.clicklist,styles.iosShadow]}>
          <ScrollView contentContainerstyle={styles.clicklistitem} >
            <ClickItem itemimg = {iconsdata.icon1} itemname= '就诊人管理' style={styles.clickitem}/>
            <ClickItem itemimg = {iconsdata.icon2} itemname= '个人信息' style={styles.clickitem}/>
          </ScrollView>
          <TouchableOpacity style={styles.backbox} onPress={()=>this.props.navigation.navigate('Home')}>
            <View style={styles.backbg} >
              <Ionicons name='ios-arrow-up-outline' style={styles.back} />
            </View>
            <Text style={styles.backtext} >回到首页</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container:{
    flex: 1,
  },

  usertitle: {
    backgroundColor: '#F0EFF6',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  userbg:{
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 180,
  },
  userface:{
    width:72,
    height: 72,
    alignItems: 'center',
  },
  text:{
    fontSize: 18,
    lineHeight: 24,
    paddingTop: 10,
    paddingBottom: 20,
  },
  fun:{
    marginTop: 0,
  },

  clicklist:{
    flex: 1,
    alignSelf: 'center',
    width: '89.3%',
    backgroundColor: '#fff',
    borderRadius: 5,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-end',
  },
  clicklistitem:{
    // flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  clickitem:{
    // flex:1,

  },
  backbox: {
    alignSelf: 'stretch',
    alignItems: 'center',
    },
  backbg: {
      backgroundColor: '#24BAB8',
      width:30,
      height:30,
      borderRadius: 15,
      marginBottom: 10,
  },
  back: {
    color: '#fff',
    fontSize: 24,
    lineHeight: 28,
    textAlign: 'center',
  },
  backtext: {
    color: '#354052',
    fontSize: 16,
    lineHeight: 22,
    paddingBottom: 20,
    textAlign: 'center',
  },

  // 设置投影，只支持iOS
  iosShadow:{
    // marginLeft: -10,
    paddingLeft: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
