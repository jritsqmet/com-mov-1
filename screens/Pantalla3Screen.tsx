import { Button, StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'

//FIREBASE
import { ref, update } from 'firebase/database'
import { db } from '../config/Config'

export default function Pantalla3Screen() {

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

        function editar() {
          update(ref(db, 'productos/' + id), {
            producto: producto,
            precio: precio,
            cantidad : cantidad
          });
        }
      

  return (
     <View style={styles.container}>
          <Text style={{ fontSize: 25, }}>EDITAR</Text>
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
    

    
            <View style={styles.cantidad}>
              <Text style={{ fontSize:20}}>Cantidad: </Text>
              <Button title='-' onPress={()=> setcantidad( cantidad-1) }/>
              <Text style={{ fontSize:20}}>{cantidad}</Text>
              <Button title='+' onPress={ ()=> setcantidad( cantidad+1)}/>
            </View>
    
    
          <Button
            title='Editar'
            onPress={() => editar()}
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