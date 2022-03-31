
import './App.css';
import { useState} from 'react';



function App() {
  
  
  const [text, setText] = useState('');
  return (
    <div className="App">
      <h1>Enkoder</h1>
      
      <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Skriv inn tekst her, også genereres det automatisk en enkodet versjon under">

      </textarea>
      <p>{text.toUpperCase()}</p>
      
       
        
    </div>
    
  );
}

export default App;
