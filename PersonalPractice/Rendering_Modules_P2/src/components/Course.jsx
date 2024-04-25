const Course = ({ course }) => {

    const total = (c) => c.parts.reduce((acc, obj) => 
      { return acc + obj.exercises}, 0 );
    
    return(
      <>
      {course.map(c => {
        return(
            <div key={c.id}>
              <h1>{c.name}</h1>
              {c.parts.map(part => 
                <p key={part.id}>{part.name} {part.exercises}</p>
              )}
              <b>total of exercises are: {total(c)}</b>
            </div>
          )
      })}
      </>
    )
  }
export default Course;