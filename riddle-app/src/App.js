import React from 'react';
import Riddle from './Riddle';
import './App.css';

function App() {
  // Single riddle properties
  const question = "We gather here with our mates to play some games and lose some weight. At this place you can do it all... swimming, running, or playing ball. And once we leave we can't wait to go back, so we will see you next time at the _____.";
  const answer = 'rpac';
  const audioSrc = `${process.env.PUBLIC_URL}/audio/RPAC.m4a`;

  return (
    <div className="App">
      <Riddle question={question} correctAnswer={answer} audioSrc={audioSrc} />
    </div>
  );
}

export default App;
