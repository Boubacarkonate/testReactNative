// CompteurCaractere.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CompteurCaractere from '../screens/CompteurCaractere';
import '@testing-library/jest-native/extend-expect';


test('renders correctly', () => {
  const { getByTestId, getByPlaceholderText } = render(<CompteurCaractere />);

  // Vérifie si le composant est rendu correctement
  const compteurCaractereComponent = getByTestId('compteur-caractere-component');
  expect(compteurCaractereComponent).toBeDefined();

  // Vérifie si le champ de saisie est rendu correctement
  const input = getByPlaceholderText('Saisir le texte...');
  expect(input).toBeDefined();
});

test('counts characters correctly', () => {
  const { getByPlaceholderText, getByText } = render(<CompteurCaractere />);

  const input = getByPlaceholderText('Saisir le texte...');
  const characterCountText = getByText(/Nombre de caractères:/);

  // Vérifie si le nombre de caractères est correctement affiché au début
  expect(characterCountText).toHaveTextContent('Nombre de caractères: 0');

  // Simule la saisie de texte
  fireEvent.changeText(input, 'Hello World');

  // Vérifie si le nombre de caractères est mis à jour après la saisie de texte
  expect(characterCountText).toHaveTextContent('Nombre de caractères: 11');
});
