//CompteurCaractere.js
import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const CompteurCaractere = () => {
  const [text, setText] = useState('');

  const handleTextChange = (inputText) => {
    setText(inputText);
  };

  const characterCount = text.length;

  return (
    <View style={styles.container} testID="compteur-caractere-component">
      <TextInput
        style={styles.input}
        placeholder="Saisir le texte..."
        onChangeText={handleTextChange}
        value={text}
        multiline={true}
      />
      <Text style={styles.characterCountText}>
        Nombre de caractères: {characterCount}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },

  characterCountText: {
    fontSize: 16,
    color: 'blue',
  },
});

export default CompteurCaractere;
