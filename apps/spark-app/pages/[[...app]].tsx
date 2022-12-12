import { useEffect, useState } from 'react';

// The one to catch it all
const Spark = () => <h1>SPARK</h1>;

export default function App() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    console.log({ isMounted });
    setIsMounted(true);
    console.log({ isMounted });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isMounted) {
    return null;
  }

  return <Spark />;
}
