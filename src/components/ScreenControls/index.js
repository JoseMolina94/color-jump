import React from "react";
import { View, TouchableOpacity } from "react-native";

export const ScreenControls = props => {
  const {
    setState = (state) => {},
    valueLeft = 'left',
    valueRight = 'right'
  } = props;
  
  return (
    <View
      style={{
        flex: 1,
        position: 'relative',
        flexWrap: 'wrap',
        flexDirection: 'row'
      }}
    >
      <TouchableOpacity
        style={{
          flex: 1,
          position: 'absolute',
          backgroundColor: 'red'
        }}
      />
      <TouchableOpacity
        style={{
          flex: 1,
          position: 'absolute',
          backgroundColor: 'red'
        }}
      />
    </View>
  )
}
