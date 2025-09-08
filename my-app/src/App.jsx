const Home = () => {
  return (<div>
    <h2>Home Component!</h2>
    </div>
    )
}
const About = () => {
  return (<div>
    <h2>About Component!</h2>
    </div>
    )
}
const Contact = () => {
  return (<div>
    <h2>Contact Component!</h2>
    </div>
    )
}
const App = () => {
  const d=new Date()
  console.log(d)
  console.log("Welcome to component!")
  const a=10
  const b=20
  return (
    <div>
      <h1>Congratulations, you completed your first React app!</h1>
      <p>Hello Time = {d.toString()}</p>
      <p> {a} + {b} = {a+b} </p>
      <Home />
      <About />
      <Contact />
    </div>
  )
  
} 
export default App;
