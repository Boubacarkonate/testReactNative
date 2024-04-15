import React, { useState, useRef } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Video, ResizeMode } from 'expo-av';

export default function TakeVideo() {
  // State pour stocker l'URI de la vidéo capturée
  const [videoUri, setVideoUri] = useState(null);
  // Référence pour accéder aux méthodes de contrôle de la vidéo
  const video = useRef(null);
  // State pour gérer le statut de lecture de la vidéo
  const [status, setStatus] = useState({});

  const registerVideo = async () => {
    // Demande de permission pour accéder à la caméra
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (!permissionResult.granted) {
      alert("You've refused to allow this app to access your camera!");
      return;
    }

    // Lancement de la caméra pour capturer une vidéo
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true, // Permet l'édition de la vidéo après la capture
      quality: 1, // Qualité maximale de la vidéo
    });

    console.log('video enregistrée : ', result);

    // Si l'utilisateur ne cancelle pas la prise de vidéo, sauvegarde de l'URI de la vidéo
    if (!result.cancelled) {
      setVideoUri(result.uri);
    }
  };

  const handlePlayPause = () => {
    if (video.current && status !== null && typeof status === 'object') {
      status.isPlaying ? video.current.pauseAsync() : video.current.playAsync();
    } else {
      console.error("Video reference or status is not yet available.");
    }
  };

  return (
    <View >
      {/* Bouton pour capturer une vidéo */}
      <Button title="Take a video" onPress={registerVideo} />
      {/* Composant Video pour afficher la vidéo capturée */}
      {videoUri && (
        <Video
          ref={video}
          
          source={{
            uri: videoUri, // URI de la vidéo à afficher
          }}
          useNativeControls // Utilise les contrôles natifs pour la lecture de la vidéo
          resizeMode={ResizeMode.CONTAIN} // Mode de redimensionnement de la vidéo
          isLooping // La vidéo se rejoue en boucle
          onPlaybackStatusUpdate={status => setStatus(status)} // Mise à jour du statut de lecture
        />
      )}
      {/* Boutons de contrôle de la vidéo */}
      <View >
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={handlePlayPause} // Utilise la fonction handlePlayPause pour la gestion de la lecture/pause
        />
      </View>
    </View>
  );
}

// Styles pour le composant
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#ecf0f1',
//   },
//   video: {
//     alignSelf: 'center',
//     width: 320,
//     height: 200,
//   },
//   buttons: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
