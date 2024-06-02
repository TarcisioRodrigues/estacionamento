import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Button } from './Button';
import { useContext } from 'react';
import { AuthContext } from '~/context/authContext';

export const Header = () => {
  const { logout } = useContext(AuthContext);
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Estacionamentos</Text>
      <TouchableOpacity style={styles.logoutButton} onPress={logout}>
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#6200ea', // Purple background color
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerText: {
    fontSize: 28,
    color: '#fff', // White text color
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#03dac6', // Teal background color for the button
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  logoutText: {
    fontSize: 16,
    color: '#000', // Black text color for the button
    fontWeight: 'bold',
  },
});
