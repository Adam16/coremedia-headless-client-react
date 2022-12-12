import { useEffect, useState } from 'react';

// The one to catch it all
const Spark = () => <h1>CoreMedia SPARK Example</h1>;

export default function App() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <Spark />;
}
