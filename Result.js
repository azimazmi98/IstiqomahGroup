
import React from 'react'; 
import "../style.css"; 
  
const Result = ({score,TryAgain}) => ( 
  <div className="score-board"> 
    <div className="score"> Your score is {score} / 5 correct answer ! ! ! </div> 
    <button className="playBtn" onClick={TryAgain} > Play Again </button> 
  </div> 
) 
  
export default Result; 
