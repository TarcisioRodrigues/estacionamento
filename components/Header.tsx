import { View, Text } from 'react-native';
import { Button } from './Button';
import { useContext } from 'react';
import { AuthContext } from '~/context/authContext';

export const Header = () => {
  const { logout } = useContext(AuthContext);
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
      <Text style={{ fontSize: 30 }}>Estacionamento</Text>
      <Button
        title="Sair"
        onPress={() => {
          logout();
        }}
      />
    </View>
  );
};
