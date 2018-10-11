'use strict';

import React,{ Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    TouchableOpacity,
  } from 'react-native';
import Foundation from 'react-native-vector-icons/Foundation';

class FunBtn extends Component{
   //这是把属性传入到类里的意思
    constructor(props){
      super(props)
    }

    render(){
      return(
        <TouchableOpacity style={ [styles.funbtn,styles.iosShadow] } onPress={() => this.props.navigation.navigate('',{})}>
          <Image source={this.props.url} style={ styles.icon}/>
          <View  style={ styles.text }>
            <Foundation name='italic' style={ styles.decorate} />
            <Text style={ styles.name } > {this.props.name} </Text>
            <Foundation name='italic' style={ styles.decorate }/>
          </View>
        </TouchableOpacity>
      )
    }
}
const styles= StyleSheet.create({

    funbtn:{
      width: 160,
      height: 128,
      margin: 8,
      backgroundColor: '#fff',
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop:28,
    },
    icon:{
      width: 42,
      height: 42,
      marginBottom: 12,
    },
    text:{
      flex:1,
      flexDirection:'row',
    },
    name:{
      color: '#354052',
      fontSize: 16,
      fontWeight: '600',
      marginRight: 10,
      marginLeft: 10,
    },
    decorate:{
      color: '#24BAB8',
      fontSize: 20,
      //阴影
      shadowColor: '#24BAB8',
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 0.45,
      shadowRadius: 5,
    },

    // 设置投影，只支持iOS
    iosShadow:{
      // marginLeft: -10,
      paddingLeft: 10,
      shadowColor: '#24BAB8',
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 0.2,
      shadowRadius: 5,
    },
})


export default FunBtn;
