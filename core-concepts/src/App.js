import './App.css';

function App() {
  const nayoks = ['Anwar', 'Jafor', 'Alomgir', 'Salman']
  const products = [
    {name: 'Photoshop', price: '$20.99'},
    {name: 'Premiere Pro', price: '$20.99'},
    {name: 'Premiere Rush', price: '$9.99'},
    {name: 'Premiere Rush', price: '$9.99'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person.</p>
        <Product name={products[0].name} price={products[0].price}></Product>
        <Product name={products[1].name} price={products[1].price}></Product>
        <Product name={products[2].name} price={products[2].price}></Product>
        <Product name={products[3].name} price={products[3].price}></Product>
        <Person name="Nayon" job="Front-End developer"></Person>
        <Person name="Jahid Hasan" job="Back-End developer"></Person>
        <Person name="Md.Jahid" job="Data Scientist"></Person>
      </header>
    </div>
  );
}

function Product(props){
  const productStyle={
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '300px',
    float: 'left'
  }
  return(
    <div style={productStyle}>
        <h3>{props.name}</h3>
        <h5>{props.price}</h5>
        <button>Buy Now</button>
    </div>
  )
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
      <p>My Profession: {props.job}</p>
  </div>
  )
}
export default App;
