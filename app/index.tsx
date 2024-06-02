import { Container } from '~/components/Container';
import Signin from './sign-in';
import { AuthProvider } from '~/context/authContext';

export default function Home() {
  return (
    <>
      <Container>
        <Signin />
      </Container>
    </>
  );
}
