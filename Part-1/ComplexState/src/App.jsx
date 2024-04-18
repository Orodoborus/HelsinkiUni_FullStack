import { useState } from 'react';

const History = (props) => {
  if (props.allClicks.length === 0){
    return(
      <div>
        the app is used by pressing the buttons.
      </div>
    )
  }
  return(
    <div>
      button press history: { props.allClicks.join(' ') }
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Display = props => <div>{props.value}</div>

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)
  const [value, setValue] = useState(10)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'));
    const updatedLeft = left + 1;
    setLeft(updatedLeft);
    setTotal(updatedLeft + right);
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'));
    const updatedRight = right + 1; 
    setRight(updatedRight);
    setTotal(updatedRight + left);
  }

  const setToValue = (newValue) => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  return (
    <div>
      {/* {left} */}
      <Display value={value}/>
      <Button handleClick={() => setToValue(1000)} text="thousand" />
      <Button handleClick={() => setToValue(0)} text="reset" />
      <Button handleClick={() => setToValue(value + 1)} text="increment" />
      {/* {right}
      <History allClicks={allClicks} /> */}
    </div>
  )
}

// const App = () => {
//   const [value, setValue] = useState(10)
  
//   const setToValue = (newValue) => () => {
//     console.log('value now', newValue)  // print the new value to console
//     setValue(newValue)
//   }
  
//   return (
//     <div>
//       {value}
//       <button onClick={setToValue(1000)}>thousand</button>
//       <button onClick={setToValue(0)}>reset</button>
//       <button onClick={setToValue(value + 1)}>increment</button>
//     </div>
//   )
// }

// const App = () => {
//   const [value, setValue] = useState(10)

  // const setToValue = (newValue) => {
  //   console.log('value now', newValue)
  //   setValue(newValue)
  // }

//   return (
//     <div>
//       {value}
//       <button onClick={() => setToValue(1000)}>
//         thousand
//       </button>
//       <button onClick={() => setToValue(0)}>
//         reset
//       </button>
//       <button onClick={() => setToValue(value + 1)}>
//         increment
//       </button>
//     </div>
//   )
// }

export default App