'use strict';

import React, { Component } from 'react';
import { StyleSheet, FlatList, Image, Text, View, Touch, TouchableOpacity} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';


// 推荐医生列表
class Recom extends Component{
  render(){
    return(
      <View style={[styles.item, styles.doctor,styles.iosShadow]}>
        <View style={[styles.item, styles.doctorTitle]}>
          <Text style={[styles.item, styles.doctorTitleName]}>推荐医生</Text>
            <Text
              style={[styles.item, styles.doctorMore]}
              onPress={() => this.props.navigation.navigate('DoctorList',{
                itemId: 6,
                other: '全部推荐意思', })
              }>更多 <EntypoIcon name='chevron-thin-right' style={styles.moreicons} /></Text>
        </View>
        <FlatList
          data={[
              {
                face: require("../../images/doc-1.jpeg"),
                name: '斯里医生',
                old: '10年',
                room: '外科',
                goodfor: '眼外科、斜视、白内障眼外科、斜视、白内障',
              },
              {
                face: require("../../images/doc-2.jpeg"),
                name: '区医生',
                old: '20年',
                room: '骨科',
                goodfor: '骨质疏松',
              },
              {
                face: require("../../images/doc-3.jpeg"),
                name: '陈医生',
                old: '17年',
                room: '内科',
                goodfor: '肠胃炎、呼吸道感染',
              },
            ] }
          renderItem={({item}) =>
              <TouchableOpacity style={styles.doctorList} onPress={()=>this.props.navigation.navigate('Usercenter')}>
                <Image style={styles.face} source={item.face} />
                <View style={styles.msg}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.old}>医龄：{item.old}        <Text style={styles.room}>{item.room}</Text></Text>
                  <Text style={styles.goodfor}>{item.goodfor}</Text>
                </View>
              </TouchableOpacity>
          }
        />
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

  // 医生推荐模块样式
  doctor:{
    marginBottom: 14,
    borderRadius: 5,
    // overflow:  'hidden',
    paddingBottom: 12,
  },

  doctorTitle:{
    // flexGrow: 1,
    flexDirection: 'row',
    flexBasis: 48,
    // 这是下划线
    borderBottomColor: 'rgba(36,186,184,0.7)',
    borderStyle: 'solid',
    borderBottomWidth: 0.5,
    width: '100%',
    backgroundColor: 'rgba(36,186,184,0.2)',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
      doctorTitleName:{
        flex:3 , //这里继承了item的的样式，所以要改回来
        lineHeight: 48,
        marginLeft: 16,
        fontWeight: '600',
        color: '#354052',
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 15,
      },
      doctorMore:{
        flex:1,
        lineHeight: 48,
        textAlign:'right',
        marginRight: 14,
        // color: 'rgba(127,143,164,1)',
        color: '#5b5b5b',
        backgroundColor: 'rgba(0,0,0,0)',
      },
      moreicons:{
        fontSize: 15,
      },

  doctorList:{
    marginLeft: 14,
    marginRight: 14,
    flexGrow: 1,
    overflow: 'scroll',
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 12,
    paddingBottom: 12,
    borderBottomColor: 'rgba(36,186,184,0.3)',
    borderStyle: 'solid',
    borderBottomWidth: 0.5,
  },


  face:{
    resizeMode: 'cover',
    height: 64,
    width: 64,
    marginRight: 12,
  },

  msg:{
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'start',
    // alignItems: 'flex-start',
    flexGrow: 1,
    flexBasis: 0,
  },
      name:{
        fontSize: 16,
        lineHeight: 24,
        flexGrow: 1,
        fontWeight: '400',
      },
      old:{
        fontSize:14,
        lineHeight: 21,
        flexGrow: 1,
        color: '#7F8FA4',
      },
      room:{
        fontSize:14,
        lineHeight: 20,
        flexGrow: 1,
        color: '#7F8FA4',
      },
      goodfor:{
        fontSize:14,
        lineHeight: 20,
        flexGrow: 1,
        color: '#24BAB8',
      },
      // 设置投影，只支持iOS
      iosShadow:{
        // marginLeft: -10,
        // paddingLeft: 10,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
})

export default Recom;
