import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';


export default function PhotoProfile() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
     
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

const showImagePickerOptions = () => {
  Alert.alert(
    'Choisissez une option 📸',
    'Voulez-vous choisir une image de votre bibliothèque ou prendre une nouvelle photo?',
    [
      {
        text: 'Choisir de la bibliothèque',
        onPress: pickImage,
      },
      {
        text: 'Prendre une photo',
        onPress: takePhoto,
      },
      {
        text: 'Annuler',
        onPress: () => {}, // Ne fait rien, ferme simplement l'alerte
        style: 'cancel', // Style iOS pour indiquer une action d'annulation
      },
    ]
  );
};


  return (
    <View style={styles.containerAvatar}>
      <Text style={styles.introText}>📸 Choisissez votre avatar</Text>

      {!image && (
        <TouchableOpacity onPress={showImagePickerOptions}>
          <View style={{ borderRadius: 300, overflow: 'hidden' }}>
            <Ionicons name="image" size={150} color="grey" />
          </View>
        </TouchableOpacity>
      )}

      {image && (
        <TouchableOpacity onPress={showImagePickerOptions}>
          <Image source={{ uri: image }} style={styles.image} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  containerAvatar: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#f2f2f2',
    paddingTop: 50,
  },
  introText: {
    fontSize: 18,
    marginBottom: 20,
    color: '#333',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
});