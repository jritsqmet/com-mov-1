import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { ref, remove } from 'firebase/database';
import { db } from '../config/Config';

export default function Pantalla4Screen() {
    const [id, setid] = useState("")

      function eliminar() {
        remove(ref(db, 'productos/' + id));
      }


  return (
    <View>
      <Text>ELIMINAR</Text>
      <TextInput 
        placeholder='Ingresar ID'
        onChangeText={ (texto) => setid(texto)}
        value={id}
      />
      <Button title='Eliminar' color={'red'} onPress={ ()=> eliminar() }/>
    </View>
  )
}

const styles = StyleSheet.create({})