const Header = (props) => {
  return(
  <div>
    <h1>{props.course.name}</h1>
  </div>
  )
}

const Part = (props) => {
  return(
    <p>{props.name} - {props.exercises}</p>
  )
}

const Content = (props) => {
  // console.log(props.parts)
  return(
    <div>
      {props.course.parts.map((name, index) => (
        <Part key={index} name={name.name} exercises={name.exercises} />
      ))}
    </div>
  )
}

const Total = (props) => {
  // console.log(props.parts.reduce((n, exercises) => n + exercises, 0))
  return(
    <p>
      Number of exercises: {
        props.course.parts.reduce((n, {exercises}) => n + exercises, 0)
      }
    </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App