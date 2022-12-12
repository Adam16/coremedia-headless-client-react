import { useEffect, useState } from 'react';
import Button from '../components/shared/button/Button';
import { GlobalStyle } from '../components/style/Base';

// The one to catch it all
const Spark = () => (
  <>
    <GlobalStyle />
    <h1>CoreMedia SPARK Example</h1>
    <Button linkTarget="/home" />
  </>
);

export default function App() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <Spark />;
}
