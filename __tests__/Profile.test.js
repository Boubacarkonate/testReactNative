import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import Profile from '../screens/profile/Profile';
import '@testing-library/jest-native/extend-expect';

// Mock des dépendances Firebase
jest.mock('../firebase/firebaseConfig', () => ({
  db: {}, // Mock de la base de données Firebase
  authentication: {
    currentUser: {
      uid: 'userId123', // Mock de l'ID de l'utilisateur actuellement connecté
    },
  },
}));

// Mock des fonctions d'accès à Firestore
jest.mock('firebase/firestore', () => ({
  collection: jest.fn(), // Mock de la fonction collection Firestore
  getDocs: jest.fn(() => ({
    forEach: jest.fn(), // Mock de la fonction forEach pour parcourir les documents Firestore
  })),
}));

describe('Profile Component', () => {
  // Test pour vérifier le rendu des données utilisateur
  test('renders user data correctly', async () => {
    // Données d'exemple de l'utilisateur
    const userData = {
      id: 'userId123',
      username: 'TestUser',
      email: 'test@example.com',
      avatarUrl: 'https://example.com/avatar.jpg',
    };

    // Mock des fonctions Firestore pour renvoyer les données de l'utilisateur
    require('firebase/firestore').getDocs.mockImplementationOnce(() => ({
      forEach: (callback) => callback({ id: 'userId123', data: () => userData }), // Mock de la fonction forEach pour simuler les données de l'utilisateur
    }));

    const { getByText, getByTestId } = render(<Profile />); // Rendu du composant Profile

    // Attente des données de l'utilisateur soient rendues
    await waitFor(() => {
      const usernameText = getByText(`Username: ${userData.username}`); // Récupération du texte du nom d'utilisateur
      const emailText = getByText(`Email: ${userData.email}`); // Récupération du texte de l'email
      const avatarImage = getByTestId('avatar-image'); // Récupération de l'image d'avatar par testID
      
      // Vérification si les éléments sont rendus correctement
      expect(usernameText).toBeDefined(); // Vérification que le texte du nom d'utilisateur est défini
      expect(emailText).toBeDefined(); // Vérification que le texte de l'email est défini
      expect(avatarImage.props.source.uri).toEqual(userData.avatarUrl); // Vérification que l'URL de l'image d'avatar correspond aux données utilisateur
    });
  });
});
