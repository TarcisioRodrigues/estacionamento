import { Container } from '~/components/Container';
import Signin from './sign-in';
import Layout from './_layout';
import { AuthProvider } from '~/context/authContext';

export default function Home() {
  return (
    <>
      <Container>
        <AuthProvider>
          <Layout />
        </AuthProvider>
      </Container>
    </>
  );
}
