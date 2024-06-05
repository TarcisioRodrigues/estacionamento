// src/app/_layout.js
import React, { useContext } from 'react';
import { Redirect, Stack } from 'expo-router';
import { AuthProvider, AuthContext } from '../context/authContext';

function Layout() {
  const { isLoggedIn } = useContext(AuthContext);
  if (!isLoggedIn) {
    <Redirect href="sign-in" />;
  }
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="sign-in" options={{ headerShown: false }} />
        <Stack.Screen name="menu" options={{ headerShown: false }} />
        <Stack.Screen name="Map" options={{ headerShown: false }} />
      </Stack>
    </AuthProvider>
  );
}

export default Layout;
