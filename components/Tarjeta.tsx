import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Tarjeta( props: any) {

  //console.log(props.data.producto);
  
  return (
    <View>
      <Text>Nombre: {props.data.producto}</Text>
      <Text>Precio: {props.data.precio}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})