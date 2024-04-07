const Header = (props) => {
  return(
  <div>
    <h1>{props.course}</h1>
  </div>
  )
}

const Part = (props) => {
  return(
    <p>{props.part} - {props.num_exercises}</p>
  )
}

const Content = (props) => {
  // console.log(props.content)
  return(
    <div>
      {props.content.map((part, index) => (
        <Part key={index} part={part.part} num_exercises={part.num_exercises} />
      ))}
    </div>
  )
}

const Total = (props) => {
  // console.log(props.content.reduce((n, num_exercises) => n + num_exercises, 0))
  return(
    <p>
      Number of exercises: {
        props.content.reduce((n, {num_exercises}) => n + num_exercises, 0)
      }
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development';
  const content = [
    {
      part: 'Fundamentals of React',
      num_exercises: 10
    },
    {
      part: 'Using props to pass data',
      num_exercises: 7
    },
    {
      part: 'State of a component',
      num_exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content content={content} />
      <Total content={content} />
    </div>
  )
}

export default App