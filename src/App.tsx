import { useRef } from 'react';

import { Navigation } from './components/Navigation';
import { Play } from './components/Play';
import { Skills } from './components/Skills';
import { Story } from './components/Story';
import { Waves } from './components/Waves';
import { Work } from './components/Work';

function App() {
  const appRef = useRef(null);

  return (
    <div css={{ position: 'relative', overflow: 'clip' }} ref={appRef}>
      <Waves/>
      <Navigation/>
      <Story/>
      <Skills/>
      <Work/>
      <Play/>
    </div>
  );
}

export default App;
