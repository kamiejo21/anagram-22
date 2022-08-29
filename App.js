import React, {useState} from 'react';
import {Routes,Route} from 'react-router-dom';
import './App.css';
import Header from '../components/Header';
import Main from '../components/Main';
import Game from '../components/Game';

function App() {
  const [wordLength, setWordLength] = useState('');
  console.log(wordLength)
  // const [selectedWord, setSelectedWord] = useState('');
  // console.log(selectedWord)

  return (
  <div className="App">
    <Header />
    
    <Routes>
      <Route exact path="/"
          element={
            
              <Main setWordLength={setWordLength}
                  wordLength={wordLength} />
              
         
          } />
<Route path="/play"
                element={
                  <Game wordLength={wordLength} 
                  />} 
              />
    </Routes>
    
  </div>
  );
}

export default App;