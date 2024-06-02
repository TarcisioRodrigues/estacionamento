import * as React from 'react';
import { View } from 'react-native';
import { Container } from '~/components/Container';
import { EditScreenInfo } from '~/components/EditScreenInfo';
import { Header } from '~/components/Header';

const Menu = () => {
  return (
    <View style={{ flex: 1 }}>
      <Container>
        <Header />
      </Container>
    </View>
  );
};

export default Menu;
