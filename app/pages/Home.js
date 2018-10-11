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
} from 'react-native';

// 引入所需组件
import { Fun, Load, Recom, Comment, Banner } from '../components';

// react-native-vector-icons插件引入
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';


export default class Home extends Component {

  // .js设置了路由，所以可以在Home组件中设定对应的navigationOptions
   static navigationOptions = ({ navigation }) => {
     return{
       title: navigation.getParam('index','主页'),
       headerLeft: (<Text
         onPress={()=>{alert('这是一个按钮！')}}
         color='#fff'
         style={styles.topbtn}
       ><Entypo name='location-pin' style={styles.topicons}/><Text style={{'fontSize':15, 'color': '#fff', 'marginLeft':10 }}>广州</Text></Text>

      ),
       headerStyle:{
         backgroundColor: 'rgba(36,186,184,0.8)',
         // opacity: 0,
       },
       headerTintColor: 'black',
       headerTitleStyle: {
         fontWeight: 'bold',
         color:'white',
       },
       //需要注释背景颜色才有效
       headerTransparent: 'true',

     }
   };

  render() {
    return (
      <View style={styles.container}>

        <Load />

        <ScrollView style={styles.scroll}>

          <Banner/>

          <Fun navigation={this.props.navigation} style={styles.container}/>

          <Recom navigation={this.props.navigation} style={ styles.iosShadow }/>

          <Comment navigation={this.props.navigation} style={ styles.iosShadow }/>

        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#F0EFF6',
    alignItems: 'center',
    flexGrow: 1, //自身的放大，放到的满屏
  },
  scroll:{
    width: '100%',
    flexGrow: 1,
  },

  item:{
    width: '89.3%',
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
  },

  work:{
    // backgroundColor: '#FFFFFFFF',
    height: 112,
    marginTop: -53,
    marginBottom: 14,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 4,
  },
  workicons:{
    fontSize: 28,
    lineHeight: 42,
    textAlign: 'center',
    color: '#F1EFB3',
  },

  topbtn:{
    fontSize: 24,
    height: 44,
    paddingLeft: 8,
    textAlign: 'center',
    color: '#F1EFB3',
  },

  topicons:{
    fontSize: 24,
    lineHeight: 44,
    textAlign: 'center',
    color: '#fff',
  },

  commentBox:{
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  comment:{
    width: 42,
    height: 42,
    backgroundColor: '#24BAB8',
    borderRadius: 21,
  },
  commentText:{
    alignSelf: 'center',
    fontSize: 14,
    lineHeight: 20,
    paddingTop: 8,
    textAlign:'center',
  },
});
