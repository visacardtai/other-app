import './App.scss';
import { useState } from 'react';
import First from '../components/First';

function App() {
  const [name, setName] = useState("tai");
  return (
    <div className="App">
      <header className="App-header">
        <First />
      </header>
    </div>
  );
}

export default App;
