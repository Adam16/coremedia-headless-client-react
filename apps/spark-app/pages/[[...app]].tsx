import { useEffect, useState } from 'react';

const Spark = () => <h1>SPARK</h1>

export default function App() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null;

  return <Spark />
}
