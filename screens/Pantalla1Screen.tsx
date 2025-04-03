import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'

//FIREBASE
import { ref, set } from "firebase/database";
import { db } from '../config/Config';

export default function Pantalla1Screen() {

  const [id, setid] = useState("")
  const [producto, setproducto] = useState("")
  const [precio, setprecio] = useState(0)
  const [cantidad, setcantidad] = useState(0)


  useEffect(() => {
    if ( Number.isNaN(precio)|| precio<0){
      setprecio(0)
    }

    if( cantidad < 0){
      setcantidad(0)
    }

  }, [precio, cantidad])
  

  function guardar() {
    set(ref(db, 'productos/' + id), {
      producto: producto,
      precio: precio,
      cantidad : cantidad,
      impuesto: precio * 0.15
    });
  }


  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, }}>GUARDAR</Text>
      <TextInput
        placeholder='Ingresar ID'
        style={styles.input}
        onChangeText={ (texto)=> setid(texto)}
      />

      <TextInput
        placeholder='Ingresar nombre del producto'
        style={styles.input}
        onChangeText={ (texto)=> setproducto(texto)}
      />

      <TextInput
        placeholder='Ingresar precio'
        style={styles.input}
        onChangeText={ (texto)=> setprecio(  +texto)}
        value={precio.toString()}
      />

      {/* <TextInput
        placeholder='Ingresar cantidad'
        style={styles.input}
        onChangeText={ (texto)=> setcantidad( +texto)}
      /> */}

        <View style={styles.cantidad}>
          <Text style={{ fontSize:20}}>Cantidad: </Text>
          <Button title='-' onPress={()=> setcantidad( cantidad-1) }/>
          <Text style={{ fontSize:20}}>{cantidad}</Text>
          <Button title='+' onPress={ ()=> setcantidad( cantidad+1)}/>
        </View>


      <Button
        title='guardar'
        onPress={() => guardar()}
      />


    </View>
  )
}

const styles = StyleSheet.create({
  input:{
    borderWidth:2,
    margin: 10,
    fontSize: 18,
    width: "80%"
  },
  cantidad:{
    flexDirection:'row',
    marginBottom: 20
  },
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})