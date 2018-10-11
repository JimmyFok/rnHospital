'use strict';

import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  View,
  StyleSheet,
  Image,
} from 'react-native';

import TabTitle from './TabTitle'
import { withNavigation } from 'react-navigation';



class InhosInfo extends Component{


  render(){
    return(
      <View style = {styles.container}>
        <TabTitle />
        <ScrollView >
          <View style = {styles.content}>
            <View style = {styles.texthalf}>
              <Text style={styles.contenttext}>主治医生</Text>
              <Text style={styles.contentvalue}>罗永浩</Text>
            </View>
            <View style = {styles.texthalf}>
              <Text style={styles.contenttext}>住院费用</Text>
              <Text style={styles.contentvalue}>¥29000.00</Text>
            </View>
            <View style = {styles.texthalf}>
              <Text style={styles.contenttext}>住院病房</Text>
              <Text style={styles.contentvalue}>罗永浩</Text>
            </View>
            <View style = {styles.texthalf}>
              <Text style={styles.contenttext}>住院床位</Text>
              <Text style={styles.contentvalue}>罗永浩</Text>
            </View>
            <View style = {styles.texthalf}>
              <Text style={styles.contenttext}>诊断类型</Text>
            <Text style={styles.contentvalue}>心脏内科心脏内科心脏内科心脏内科</Text>
            </View>
            <View style = {styles.texthalf}>
              <Text style={styles.contenttext}>危机程度</Text>
              <Text style={styles.contentvalue}>一般</Text>
            </View>
            <View style = {styles.texthalf}>
              <Text style={styles.contenttext}>入院日期</Text>
              <Text style={styles.contentvalue}>2018.03.25</Text>
            </View>
            <View style = {styles.texthalf}>
              <Text style={styles.contenttext}>出院日期</Text>
              <Text style={styles.contentvalue}>2018.04.25</Text>
            </View>
            <View style = {styles.textall}>
              <Text style={styles.contenttext}>病情描述</Text>
              <Text style={styles.contentvalue}>经常低血糖，低血压；经常低血
  糖，低血压；经常低血糖。</Text>
            </View>
            <View Text style = {styles.textall}>
              <Text style={styles.contenttext}>备注</Text>
              <Text style={styles.contentvalue}>注意饮食，注意休息</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  // 背景块，
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
  },

  content:{
    paddingBottom: 16,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    flexWrap: 'wrap',
    paddingLeft: 12,
    paddingRight: 12,
  },
  texthalf:{
    width: '50%',
    flexDirection: 'row',
    paddingTop : 20,
    paddingLeft: 4,
    paddingRight: 4,
  },

  textall:{
    width: '100%',
    flexDirection: 'row',
    paddingTop : 20,
    paddingLeft: 4,
    paddingRight: 4,
  },
  contenttext:{
    fontSize: 15,
    lineHeight: 20,
    width: 72,
  },
  contentvalue:{
    flex: 1,
    color: '#7F8FA4',
    fontSize: 15,
    lineHeight: 20,
    flexWrap: 'wrap',
  },
})

export default withNavigation(InhosInfo)
