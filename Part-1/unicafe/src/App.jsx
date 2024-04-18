import { useState } from 'react';

const Title = ({ title }) => {
  return(
    <h1>{title}</h1>
  )
}

const Button = ({ eventHandler, text}) => {
  return(
    <button onClick={eventHandler}>{text}</button>
  )
}

const Data = ({ text, stat }) => {
  return <p>{text}: {stat}</p>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [history, setHistory] = useState([]);
  const [all, setAll] = useState(0);
  const [mean, setMean] = useState(0);

  // console.log(history); - works

  const averageFeedback = () => 
    setMean( (good+neutral+bad)/all );

  //*** Feedback Event Functions */
  //G = Good
  const goodReview = () => {
    setHistory(history.concat('G'));
    setGood(good+1);
    setAll(all+1);
    averageFeedback();
  }
  //N = Neutral
  const neutralReview = () => {
    setHistory(history.concat('N'));
    setNeutral(neutral+1);
    setAll(all+1);
  }
  //B = Bad
  const badReview = () => {
    setHistory(history.concat('B'));
    setBad(bad+1);
    setAll(all+1);
  }
  //* Feedback Event Functions ***/

  return (
    <>
      <Title title={'give feedback'}/>
      <Button eventHandler={goodReview} text={'good'} />
      <Button eventHandler={neutralReview} text={'neutral'} />
      <Button eventHandler={badReview} text={'bad'} />

      <Title title={'Statistics'} />
      <Data text={'good'} stat={good} />
      <Data text={'neutral'} stat={neutral} />
      <Data text={'bad'} stat={bad} />
      <Data text={'all'} stat={all} />
      <Data text={'Average'} stat={all} />
    </>
  )
}

export default App