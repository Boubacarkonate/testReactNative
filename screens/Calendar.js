import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';

export default function Calendar() {
const [date, setData] = useState(null)
const handleDateChange = (event, selectedDate) => {

}
  return (
    <View>
     <DateTimePicker
  value={new Date()}
  mode={'datetime'}
  display='default'
  onChange={handleDateChange}
  style={styles.dateTimePicker} // Utilisation du style personnalisé
  testID='dateTimePicker'
/>
    </View>
  )
}

const styles = StyleSheet.create({
  dateTimePicker: {
    backgroundColor: 'white', // Couleur de fond
    borderRadius: 10, // Bordure arrondie
    borderWidth: 1, // Largeur de la bordure
    borderColor: 'red', // Couleur de la bordure
    padding: 10, // Espacement intérieur
    marginTop: 20, // Marge supérieure
    width: 300, // Largeur du composant
    height: 50, // Hauteur du composant
    alignItems: 'center', // Alignement horizontal
    justifyContent: 'center', // Alignement vertical
  },
})