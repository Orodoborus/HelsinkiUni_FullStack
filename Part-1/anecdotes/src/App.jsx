import { useState } from 'react';

const Button = ({ handleRandom, text }) => {
  return(
    <button onClick={handleRandom}>{text}</button>
  )
}

const Title = ({ title }) => {
  return(
    <h1>{title}</h1>
  )
}

let votesAry = new Uint8Array(8);

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(0);
  const [votedAnecdote, setVotedAnecdote] = useState(0);
  const [mostVotes, setMostVotes] = useState(0);

  //handles votes
  const handleVote = () => {
    const newVotes = votes + 1;
    const newMostVotes = votedAnecdote;
    setVotes(newVotes);
    votesAry[selected] = newVotes;
    
    const updatedVotes = [...votesAry];
    const favoriteAnecdote = Math.max(...updatedVotes);
    const mostVotedAnec = updatedVotes.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
    console.log(favoriteAnecdote);
    console.log(newVotes);
    
    //most voted anecdote
    setMostVotes(favoriteAnecdote);
    setVotedAnecdote(mostVotedAnec);
  }

  //handles randomization
  const handleRandom = () =>{
    let x = Math.floor(Math.random() * 8);
    setSelected(x);
    setVotes(votesAry[x]);
  }

  return (
    <div>
      <Title title='Anecdote of the day' />
      {anecdotes[selected]}
      <p>has {votes} votes</p>
      <Button handleRandom={handleVote} text='Vote' />
      <Button handleRandom={handleRandom} text='Next anecdote' />
      <Title title='Anecdote with most votes' />
      {anecdotes[votedAnecdote]}
      <p>has {mostVotes} votes</p>
    </div>
  )
}

export default App