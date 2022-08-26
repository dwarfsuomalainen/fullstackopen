/// Exercises 1.1 -1.4

/*const App = () => {
  
  const Header = () => {
    return (
      <h1>{course}</h1>
    )
  }

  const Content = () => {
    return(
      <div>
        <Part part ={part1} exercises = {exercises1}/>
        <Part part ={part2} exercises = {exercises2}/>
        <Part part ={part3} exercises = {exercises3}/> 
      </div>
    )
  }

  const Total = () => {
    return (
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    )
  }

  const Part = (props) => {
    return (
      <p>{props.part} {props.exercises}</p>
    )
  }
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total />
    </div>
  )
}*/

/// exercise 1.5 

/*
const App = () => {
  const course = 'Half Stack application development'

  const Header = () => {
    return (
      <h1>{course}</h1>
    )
  }

  const Content = () => {
    return(
      <div>
        <Part part ={parts[0].name}  exercises = {parts[0].exercises}/>
        <Part part ={parts[1].name} exercises = {parts[1].exercises}/>
        <Part part ={parts[2].name} exercises = {parts[2].exercises}/> 
      </div>
    )
  }
  const Part = (props) => {
    return (
      <p>{props.part} {props.exercises}</p>
    )
  }
  const Total = () => {
    return (
      <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[1].exercises}</p>
    )
  }

  const parts = [ 
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

    return (
      <div>
        <Header course={course} />
        <Content parts={parts} />
        <Total parts={parts}/>
      

      </div>
    )
}*/
/// exercise 1.5

const App = () => {
  const course ={

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

    

  const Header = () => {
    return (
      <h1>{course.name}</h1>
    )
  }

  const Content = () => {
    return(
      <div>
        <Part part ={course.parts[0].name}  exercises = {course.parts[0].exercises}/>
        <Part part ={course.parts[1].name} exercises = {course.parts[1].exercises}/>
        <Part part ={course.parts[2].name} exercises = {course.parts[2].exercises}/> 
      </div>
    )
  }
  const Part = (props) => {
    return (
      <p>{props.part} {props.exercises}</p>
    )
  }
  const Total = () => {
    return (
      <p>Number of exercises {course.parts[0].exercises + course.parts[1].exercises + course.parts[1].exercises}</p>
    )
  }

    return (
      <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts}/>
      

      </div>
    )
}

export default App