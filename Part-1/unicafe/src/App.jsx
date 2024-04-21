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

const StatisticLine = ({ text, stat }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{stat}</td>
    </tr>
  )
}

const Statistics = (props) => {
  return(
    <>
      <Title title={'Statistics'} />
      <table>
        <tbody>
            <StatisticLine text='good' stat={props.good} />
            <StatisticLine text='neutral' stat={props.neutral} />
            <StatisticLine text='bad' stat={props.bad} />
            <StatisticLine text='all' stat={props.all} />
            <StatisticLine text='Average' stat={props.mean} />
            <StatisticLine text='Positive' stat={props.pos_per} />
        </tbody>
      </table>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [history, setHistory] = useState([]);
  const [all, setAll] = useState(0);
  const [mean, setMean] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  // console.log(history); 
  // console.log(
  //   'G:', good, 
  //   ', N:', neutral, 
  //   ', B:', bad, 
  //   'Avg: ', mean,
  //   'Pos%: ', positivePercentage
  // );

//Avg Feedback (good: 1, neutral: 0, bad: -1)
  const averageFeedback = (newFeed) => {
    let generalFeedback = 0;
    if(newFeed.length > 1)
      generalFeedback = newFeed.reduce((first, next) => first + next, 0);
    else generalFeedback = newFeed[0];
    setMean( generalFeedback/newFeed.length );
  }
//Positive % feedback arrow function
  const positivePercentageFeedback = 
    (good, all) => setPositivePercentage( (good/all)*100 + "%");
  
  //*** Feedback Event Functions */
  //G = Good
  const goodReview = () => {
    const goodFeedback = good + 1;
    const allFeedback = all + 1;
    const newFeed = history.concat(1);
    setHistory(newFeed);
    setGood(goodFeedback);
    setAll(all+1);
    averageFeedback(newFeed);
    positivePercentageFeedback(goodFeedback, allFeedback);
  }
  //N = Neutral
  const neutralReview = () => {
    const allFeedback = all + 1;
    const newFeed = history.concat(0);
    setHistory(newFeed);
    setNeutral(neutral+1);
    setAll(allFeedback);
    averageFeedback(newFeed);
    positivePercentageFeedback(good, allFeedback);
  }
  //B = Bad
  const badReview = () => {
    const allFeedback = all + 1;
    const newFeed = history.concat(-1);
    setHistory(newFeed);
    setBad(bad+1);
    setAll(all+1);
    averageFeedback(newFeed);
    positivePercentageFeedback(good, allFeedback);
  }
  /* Feedback Event Functions ***/

  return (
    <>
      <Title title={'give feedback'}/>
      <Button eventHandler={goodReview} text={'good'} />
      <Button eventHandler={neutralReview} text={'neutral'} />
      <Button eventHandler={badReview} text={'bad'} />

      <Statistics 
        good    = {good} 
        neutral = {neutral}
        bad     = {bad}
        all     = {all}
        mean    = {mean}
        pos_per = {positivePercentage}
      />
    </>
  )
}

export default App