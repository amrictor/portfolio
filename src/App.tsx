import { useRef } from 'react'
import Waves from './components/Waves'
import { Navigation } from './components/Navigation';
import { Story } from './components/Story';
import { Skills } from './components/Skills';
import { Work } from './components/Work';
import { Play } from './components/Play';

function App() {
  const appRef = useRef(null);

  return (
    <div ref={appRef}>
      <Waves/>
      <Navigation/>
      <Story/>
      <Skills/>
      <Work/>
      <Play/>
    </div>
  )
}

export default App
