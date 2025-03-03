import { useState } from 'react';
import SpacecraftBuilder from './components/SpacecraftBuilder';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SpacecraftBuilder />
    </>
  )
}

export default App;
