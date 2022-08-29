import React from 'react';
import SelectInput from './SelectInput';
import PlayButton from './PlayButton';
import './Main.css';
import anagrams from './anagramJson';

function Main(props) {
    const answers = Object.keys(anagrams)

    return(
        <main>
            <div className="row mx-1 my-3">
                <SelectInput style={{textAlign:'left'}} label="WORD LENGTH"
                id="wordLength"
                currentValue={props.wordLength} 
                setCurrentValue={props.setWordLength}
                values={answers} />
            </div>
            
            <div style={{textAlign:'left'}}>
                <h8>1. Choose .</h8><br />
                <h8>2. Press <strong>Play!</strong></h8><br />
                <h8>3. How many anagrams can you find in a minute?</h8>
            </div>
            <div className="row mx-1 my-3">
                <PlayButton />
            </div>
        </main>
    )
}

export default Main;