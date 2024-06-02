import { AuthProvider } from '~/context/authContext';
import '../global.css';

import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <AuthProvider>
      <Stack />
    </AuthProvider>
  );
}
