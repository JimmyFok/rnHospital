'use strict';

import React,{Component} from 'react';
import {
    Image,
  } from 'react-native';

class LogoTitle extends Component{
  render(){
    return(
      <Image
        source={require('../../images/title.jpg')}
        style={{width:'100%', height:'100%' }}
      />
    )
  }
}

export default LogoTitle;
