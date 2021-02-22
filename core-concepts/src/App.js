import './App.css';

function App() {
  const nayoks = ['Anwar', 'Jafor', 'Alomgir', 'Salman']
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person.</p>
        <Person name="Rubel Nayok" nayika="Moushumi"></Person>
        <Person name="Jasim" nayika="Shabana"></Person>
        <Person name="BappaRaz" nayika="Cheka"></Person>
        <Person name="Elias K" nayika="Bobita"></Person>
      </header>
    </div>
  );
}
function Person(props){
  const personStyle={
    border: '2px solid tomato',
    margin: '10px',
    height:'200px',
    width:'500px'
  }
  console.log(props);
  // style={{border: '2px solid red', margin: '10px'}}
  return (
  <div style={personStyle}>
      <h1>Nayok: {props.name}</h1>
      <h3>Hero of  {props.nayika}</h3>
  </div>
  )
}
export default App;
