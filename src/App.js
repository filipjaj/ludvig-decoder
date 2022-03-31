
import './App.css';
import { useState, useRef, useEffect } from 'react';



function App() {
  
  
  const [text, setText] = useState('');
  return (
    <div className="App">
      
      <textarea value={text} onChange={(e) => setText(e.target.value)}>

      </textarea>
      <p>{text.toUpperCase()}</p>
      
       
        
    </div>
    
  );
}

export default App;
