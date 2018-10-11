'use strict';

import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native'
import Swiper from 'react-native-swiper'


class Banner extends Component{
    render(){
      return(
        <Swiper
          style={styles.wrapper}
          autoplay={true}
          dot={<View style={{backgroundColor:'rgba(0,0,0,.2)', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: -50, marginBottom: 3,}} />}
          activeDot={<View style={{backgroundColor: 'rgba(36,186,184,1)', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: -50, marginBottom: 3,}} />}>
          <View style={styles.slide}>
            <Image
              style={styles.banner}
              source={require('../../images/banner1.jpg')}
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.banner}
              source={require('../../images/banner4.jpeg')}
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.banner}
              source={require('../../images/banner5.jpeg')}
            />
          </View>
        </Swiper>
      )
    }
}



const styles = StyleSheet.create({

  wrapper:{
    height: 244,
  },
  banner:{
    width: '100%',
    height: 244,
  },
})

export default Banner
