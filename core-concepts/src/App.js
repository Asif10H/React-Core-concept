import './App.css';
import logo from './logo.svg';

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
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <p>My first React Paragraph</p>
        <p style={style}>My second React Paragraph</p>
        <h2>my heading {44+33+3-66}</h2>
        <h2 className="" style={style}>My heading {person1.name +" "+ person1.job}</h2>
        <h3 style={{ color: 'green',backgroundColor: 'tomato'}}>Singer: {person2.name +" "+ person2.job}</h3>
      </header>
    </div>
  );
}

export default App;
