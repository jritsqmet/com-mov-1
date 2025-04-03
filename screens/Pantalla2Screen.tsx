import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

//FIREBASE
import { ref, onValue, DataSnapshot } from "firebase/database";
import { db } from '../config/Config';
import Tarjeta from '../components/Tarjeta';



export default function Pantalla2Screen() {
  const [productos, setproductos] = useState([])

  useEffect(() => {
    leer()
  }, [])
  


  function leer() {
    const starCountRef = ref(db, 'productos/'  );
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      //console.log(productos);

      ///
      // let datos: any [] = []
      // for (let clave in data){
      //   datos.push( {id: clave, ...data[clave] })
      // }
      const datos = data ? Object.keys(data).map(clave => ({
        id: clave,
        ...data[clave]
      })) : [];

      setproductos(datos as any)
    });
  }



  return (
    <View>
      <Text style={{fontSize:25}}>Leer</Text>
      <FlatList 
        data ={productos}
        renderItem={ ( {item} : any ) =>
          <Tarjeta data = {item}/>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({})