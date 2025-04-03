import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function WelcomeScreen( {navigation}: any ) {
  return (
    <View>
      <Text>WelcomeScreen</Text>
      <Button 
        title='ingresar'
        onPress={ ()=>  navigation.navigate("Drawer")}
      />
    </View>
  )
}

const styles = StyleSheet.create({})