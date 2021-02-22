import './App.css';
import logo from './logo.svg';

function App() {
  //var name = "Dr. Mahfuz";
  var person = {
    name: "Dr. Mahfuz",
    job: "singer"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <p>My first React Paragraph</p>
        <p>My second React Paragraph</p>
        <h2>my heading {44+33+3-66}</h2>
        <h2>My heading {person.name +" "+ person.job}</h2>
      </header>
    </div>
  );
}

export default App;
