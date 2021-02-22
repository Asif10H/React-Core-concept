import './App.css';

function App() {
  //var name = "Dr. Mahfuz";
  var person1 = {
    name: "Dr. Mahfuz",
    job: "singer"
  }
  var person2 = {
    name: "Eva Rahman",
    job: "Kokil Kondi"
  }
  var style={
    color: 'red',
    backgroundColor: 'yellow'
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person.</p>
        <Person></Person>
        <Person></Person>
        <Person></Person>
      </header>
    </div>
  );
}
function Person(){
  const personStyle={
    border: '2px solid red',
    margin: '10px'
  }
  // style={{border: '2px solid red', margin: '10px'}}
  return (
  <div style={personStyle}>
      <h1>Name: Sakaib Al Hasan</h1>
      <h3>Hero of the year</h3>
  </div>
  )
}
export default App;
