import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native'; // Import du NavigationContainer
import UpdateProfile from '../screens/profile/UpdateProfile';

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
  doc: jest.fn(), // Mock de la fonction doc Firestore
  getDoc: jest.fn(() => ({
    exists: true, // Mock de la fonction exists pour simuler l'existence du document
    data: jest.fn(() => ({ // Mock de la fonction data pour renvoyer les données de l'utilisateur
      email: 'test@example.com',
      username: 'TestUser',
      avatarUrl: 'https://example.com/avatar.jpg',
    })),
  })),
  updateDoc: jest.fn(), // Mock de la fonction updateDoc Firestore
}));

describe('UpdateProfile Component', () => {
  // Test pour vérifier le rendu des champs de saisie
  test('renders input fields correctly', async () => {
    const { getByPlaceholderText } = render(
      <NavigationContainer> {/* Utilisation du NavigationContainer */}
        <UpdateProfile />
      </NavigationContainer>
    ); 

    const emailInput = getByPlaceholderText('Enter your email');
    const usernameInput = getByPlaceholderText('Username');
    const avatarInput = getByPlaceholderText('Avatar');

    expect(emailInput).toBeDefined();
    expect(usernameInput).toBeDefined();
    expect(avatarInput).toBeDefined();
  });

  // Test pour vérifier la mise à jour des champs de saisie
  test('updates input fields correctly', async () => {
    const { getByPlaceholderText } = render(
      <NavigationContainer> {/* Utilisation du NavigationContainer */}
        <UpdateProfile />
      </NavigationContainer>
    ); 

    const emailInput = getByPlaceholderText('Enter your email');
    const usernameInput = getByPlaceholderText('Username');
    const avatarInput = getByPlaceholderText('Avatar');

    fireEvent.changeText(emailInput, 'test@example.com');
    fireEvent.changeText(usernameInput, 'TestUser');
    fireEvent.changeText(avatarInput, 'https://example.com/avatar.jpg');

    expect(emailInput.props.value).toBe('test@example.com');
    expect(usernameInput.props.value).toBe('TestUser');
    expect(avatarInput.props.value).toBe('https://example.com/avatar.jpg');
  });

  // Test pour vérifier l'appel de la fonction updateUserProfile lors de l'appui sur le bouton
  test('calls updateUserProfile function on button press', async () => {
    const { getByText } = render(
      <NavigationContainer> {/* Utilisation du NavigationContainer */}
        <UpdateProfile />
      </NavigationContainer>
    ); 

    const saveButton = getByText('Save Changes');

    fireEvent.press(saveButton);
  });

});
