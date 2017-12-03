import React from 'react'
import { View, StatusBar } from 'react-native'
import { Constants } from 'expo'
import { blue } from 'app/utils/colors'

export default function UdaciStatusBar (props) {
  return (
    <View style={{backgroundColor: blue, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={blue} {...props} />
    </View>
  )
}
