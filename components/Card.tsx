import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container } from './Container';
import { apiClientPython } from '~/services/api';

interface CardProps {
  title: string;
  subtitle1: string;
  subtitle2: string;
  id: number;
}
export const Card = ({ title, subtitle1, subtitle2, id }: CardProps) => {
  const [estacionamento, setEstacionamento] = React.useState<string[]>();
  const getEstacionamento = async () => {
    const { data } = await apiClientPython.get(`/vagas/${Number(id)}`);
    setEstacionamento(data);
  };
  useEffect(() => {
    getEstacionamento();
    const intervalId = setInterval(getEstacionamento, 300000); // 5 minutes in milliseconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>{subtitle1}</Text>
        <Text style={styles.subtitle}>{subtitle2 + estacionamento}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff', // White background color
    padding: 20, // Padding inside the card
    borderRadius: 10, // Rounded corners
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    shadowOpacity: 0.1, // Shadow opacity for iOS
    shadowRadius: 5, // Shadow radius for iOS
    elevation: 5, // Shadow for Android
    marginVertical: 10, // Vertical margin between cards
  },
  title: {
    fontSize: 24, // Font size for the title
    fontWeight: 'bold', // Bold text for the title
    marginBottom: 10, // Margin below the title
  },
  subtitleContainer: {
    flexDirection: 'row', // Subtitles side by side
    justifyContent: 'space-between', // Space between subtitles
  },
  subtitle: {
    fontSize: 16, // Font size for the subtitles
    color: '#666', // Gray color for the subtitles
  },
});

export default Card;
