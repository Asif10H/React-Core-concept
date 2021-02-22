import './App.css';

function App() {
  const nayoks = ['Anwar', 'Jafor', 'Alomgir', 'Salman']
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person.</p>
        <Person name="Nayon" profession="Front-End developer"></Person>
        <Person name="Jahid Hasan" job="Back-End developer"></Person>
        <Person name="Md.Jahid" job="Data Scientist"></Person>
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
  return (
  <div style={personStyle}>
      <h3>My Name: {props.name} </h3>
      <p>My Profession: {props.profession}</p>
  </div>
  )
}
export default App;
