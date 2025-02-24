import React, { useState } from 'react';
import Space from './components/Space';
import './index.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Space />
    </div>
  )
}

export default App
