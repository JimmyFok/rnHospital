'use strict';

import React, { Component } from 'react';
import { StyleSheet, FlatList, Image, Text, View } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


// 推荐医生列表
class Comment extends Component{
  render(){
    return(
      // 热门话题列表
      <View style={[styles.item, styles.doctor, styles.iosShadow]}>
        <View style={[styles.item, styles.doctorTitle]}>
          <Text style={[styles.item, styles.doctorTitleName]}>热议话题</Text>
          <Text
            style={[styles.item, styles.doctorMore]}
            onPress={() => this.props.navigation.navigate('HotTalk',{
              itemId: 5,
              other: '热议话题', })
            }
            >更多<EntypoIcon name='chevron-thin-right' style={styles.moreicons} /></Text>
        </View>
        <FlatList
        data={[
            {
              img: "https://b-ssl.duitang.com/uploads/item/201804/05/20180405195504_dhykq.thumb.700_0.jpg",
              patname: '腰间盘突出',
              patclass: '颈椎疾病',
              watch: 100,
              reply: 64,
              good: 98,
              detail: '腰间发送到反倒是付费电视跟鬼画符似的难受压，要做手术不？',
            },
            {
              img: 'http://img3.duitang.com/uploads/item/201508/17/20150817153109_LTKVF.gif',
              patname: '未知疾病问题',
              patclass: '其他未知疾病',
              watch: 94,
              reply: 23,
              good: 64,
              detail: '腰间盘左侧后联发科四大皆空发了黄色的尽快发货受压，要做手术不？',
            },
            {
              img: 'https://b-ssl.duitang.com/uploads/item/201503/22/20150322142717_B2AcM.thumb.700_0.jpeg',
              patname: '腰间盘突出',
              patclass: '脊椎疾病',
              watch: 76,
              reply: 33,
              good: 60,
              detail: '腰间盘左侧后方呈局限性突出，邻近神经根及硬脊椎莫难受压，要做手术不？',
            },
          ] }
        renderItem={({item}) =>
            <View style={styles.doctorList}>
              <View style={styles.msg}>
                <Text style={styles.patname}>{item.patname}</Text>
                <Text style={styles.detail}>{item.detail}</Text>
                <View style={styles.ask}>
                  <Text style={styles.patclass}>{item.patclass}</Text>
                  <Text style={styles.watch}><FontAwesomeIcon name='eye' style={styles.icons} />  {item.watch}    </Text>
                  <Text style={styles.reply}><FontAwesomeIcon name='comments-o' style={styles.icons} />  {item.reply}    </Text>
                  <Text style={styles.good}><MaterialCommunityIcons name='thumb-up-outline' style={styles.icons} />  {item.good}    </Text>
                </View>
              </View>
            </View>
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


  /// 问题模块样式
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
    flexGrow: 1,
    flexBasis: 0,
  },
      ask:{
        display:'flex',
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
      },
      patname:{
        fontSize: 16,
        lineHeight: 24,
        // flexGrow: 1,
        fontWeight: '400',
        color:'#24BAB8',
      },
      patclass:{
        fontSize:14,
        lineHeight: 21,
        color: '#7F8FA4',
        marginRight: 20,
      },
      detail:{
        fontSize:14,
        lineHeight: 20,
        paddingTop: 4,
        paddingBottom: 4,
        color: '#B9CBE2',
      },
      watch:{
        color: '#B9CBE2',
      },
      reply:{
        color: '#B9CBE2',
      },
      good:{
        color: '#B9CBE2',
      },
  icons:{
    fontSize: 14,
    lineHeight: 20,
    color: '#B9CBE2',
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

export default Comment;
