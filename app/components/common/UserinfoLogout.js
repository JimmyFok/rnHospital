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
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LogoTitle from './LogoTitle';

// type Props = {};
class Userinfo extends Component{

render() {
    return (
      <LinearGradient
        colors={['#39D1CF','#22B8B6']}
        style={styles.userTitle} >
        <Image
          style={styles.userFace}
          source={require('../../images/userFace.png')}
        />
        <View style={styles.userMsg}>
          <Text style={styles.userName}>未登录</Text>
          <TouchableOpacity style={styles.userChange} onPress={() => this.props.navigation.navigate('Inhospital')}>
            <Text style={styles.userChangeText}>登录</Text>
          </TouchableOpacity>
          <Text style={styles.userId}>诊断卡号 : 未知</Text>
        </View>
        <TouchableOpacity
           style={styles.recharge}
           onPress={() => this.props.navigation.push('Outpatient')}>
          <Image
            source={require('../../images/recharge.png')}
            style={styles.rechargeImage}
          />
          <Text style={styles.userMoney}>¥1000.00</Text>
        </TouchableOpacity>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
    userTitle:{
        flexDirection: 'row',
        alignItems: 'center',
        height: 120,
        // 设置投影，只支持iOS
        marginLeft: -10,
        paddingLeft: 10,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.4,
        shadowRadius: 5
    },

        userFace:{
          width: 62,
          height: 62,
          marginLeft : 12,
          marginRight : 12,
        },
        userMsg:{
          flex: 3,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
        },
        userName:{
          lineHeight: 30,
          fontSize: 18,
          color: '#fff',
          fontWeight: '600',
        },
        userChange:{
          width: 72,
          height: 24,
          marginLeft: 12,
          marginTop: 3,
          backgroundColor: 'rgba(0,0,0,0.20)',
        },
        userChangeText:{
          lineHeight: 24,
          fontSize: 13,
          textAlign: 'center',
          color: '#fff',
        },
        userId:{
          lineHeight: 24,
          color: '#fff',
        },


        recharge:{
          marginRight: 20,
          marginTop: 6,
          alignItems: 'center',
        },
        rechargeImage:{
          width: 48,
          height: 48,
        },
        userMoney:{
          fontSize: 14,
          color: '#F1EFB3',
          lineHeight: 24,
          textAlign:'center',
        },
        // 设置投影，只支持iOS
        iosShadow:{
          // marginLeft: -10,
          paddingLeft: 10,
          shadowColor: 'black',
          shadowOffset: {width: 0, height: 0},
          shadowOpacity: 0.4,
          shadowRadius: 5,
        },
});

export default Userinfo
