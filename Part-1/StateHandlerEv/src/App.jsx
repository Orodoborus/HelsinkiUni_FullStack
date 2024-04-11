import { useState } from 'react'

const Display = ({counter}) => <div>{counter}</div>;

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>;


const App = () => {
  const [ counter, setCounter ] = useState(0);
  console.log('rendering with counter value', counter);

  const increaseByOne = () => {
    console.log('increasing, value before', counter);
    setCounter(counter + 1);
  }
  const resetToZero = () => {
    console.log('resetting to zero, value before', counter);
    setCounter(0);
  }
  const decraseCounter = () => {
    console.log('decreasing, value before', counter);
    setCounter(counter -1);
  }

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text={'Plus'}/>
      <Button onClick={resetToZero} text={'Zero'} />
      <Button onClick={decraseCounter} text={'Minus'} />
    </div>
  )
}

export default App
