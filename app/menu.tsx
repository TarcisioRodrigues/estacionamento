import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Card from '~/components/Card';
import { Container } from '~/components/Container';
import { Header } from '~/components/Header';
import { apiClientPythonEstacionamento } from '~/services/api';

const Menu = () => {
  const [estacionamento, setEstacionamento] = React.useState<string[]>();
  const getEstacionamento = async () => {
    const { data } = await apiClientPythonEstacionamento.get('/estacionamento');
    setEstacionamento(data);
  };
  React.useEffect(() => {
    getEstacionamento();
    const intervalId = setInterval(getEstacionamento, 60000); // 5 minutes in milliseconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);
  return (
    <View style={styles.menuContainer}>
      <Container>
        <Header />
        {estacionamento?.map((est: any) => (
          <Card
            key={est.id}
            id={Number(est.id)}
            title={est.name}
            subtitle1={`Total de Vagas: ${est.capacidade}`}
            subtitle2={`Vagas Livres: `}
          />
        ))}
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    backgroundColor: '#f8f8f8', // Light grey background
    padding: 20, // Add padding around the container
  },
  container: {
    backgroundColor: '#fff', // White background for the container
    borderRadius: 10, // Rounded corners
    padding: 15, // Internal padding
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow for iOS
    shadowOpacity: 0.25, // Shadow for iOS
    shadowRadius: 3.84, // Shadow for iOS
    elevation: 5, // Shadow for Android
  },
});

export default Menu;
