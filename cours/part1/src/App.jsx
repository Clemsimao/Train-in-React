const Hello = ({ name, age, hobby }) => {
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>Hello {name}, you are {age} years old and your hobby is {hobby}</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10
  const hobby = 'video games'

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} hobby={hobby} />
      <Hello name={name} age={age} hobby={"ride a bike"} />
      <Hello name="clem" age={26} hobby={"nothing"} />
      
    </div>
  )
}

export default App
