import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import NoteList from './components/NoteList.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div >      
        <div className='misNotas'>
          <h1 id="titulo">Aplicación de Notas</h1>
          <NoteList></NoteList>
        </div>
      </div>
    </>
  )
}

export default App