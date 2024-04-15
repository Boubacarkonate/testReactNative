import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements'

export default function AudioCall({navigation}) {
  return (
    <View>
      <Button onPress={ () => navigation.navigate('VideoCall')}/>
    </View>
  )
}

const styles = StyleSheet.create({})