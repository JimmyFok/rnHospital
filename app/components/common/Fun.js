'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

// react-native-vector-icons插件引入
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

// 功能区
class Fun extends Component{
  constructor(){
    super()
    this.state ={
      btnOnOff : {
        
      },
    }

  }
  render(){
    return(
      <View style={[styles.item, styles.work,styles.iosShadow]}>
        <TouchableOpacity
          style={styles.commentBox}
          title="门诊"
          onPress={() => this.props.navigation.navigate('Outpatient',{
            itemId: 1,
            other: '门诊主页', })
          }>
          <View style={styles.comment}>
            <FontAwesomeIcon name='stethoscope' style={styles.workicons} />
          </View>
          <Text style={styles.commentText} >门诊</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.commentBox}
          title="住院"
          onPress={() => this.props.navigation.navigate('Inhospital',{
            itemId: 2,
            other: '住院主页', })
          }>
          <View style={styles.comment}>
            <MaterialCommunityIcons name='hospital-building' style={[styles.workicons]} />
          </View>
          <Text style={styles.commentText} >住院</Text>

        </TouchableOpacity>
        <TouchableOpacity
          style={styles.commentBox}
          title="体检"
          onPress={() => this.props.navigation.navigate('Health',{
            itemId: 3,
            other: '体检主页', })
          }>
          <View style={styles.comment}>
            <Ionicons name='ios-body' style={styles.workicons} />
          </View>
          <Text style={styles.commentText} >体检</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.commentBox]}
          title="用户中心"
          onPress={() => this.props.navigation.navigate('Usercenter',{
            itemId: 4,
            other: '用户中心', })
          }>
          <View style={styles.comment}>
            <FeatherIcon name='user' style={styles.workicons} />
          </View>
          <Text style={styles.commentText} >个人中心</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  item:{
    width: '89.3%',
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
  },

  work:{
    // backgroundColor: '#FFFFFFFF',
    marginTop: -33,
    height: 112,
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



export default Fun;
