import './App.css';

function App() {
  const nayoks = ['Anwar', 'Jafor', 'Alomgir', 'Salman']
  const products = [
    {name: 'Photoshop', price: '$20.99/mo'},
    {name: 'Premiere Pro', price: '$20.99/mo'},
    {name: 'Premiere Rush', price: '$9.99/mo'},
    {name: 'Premiere Rush', price: '$9.99/mo'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person.</p>
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        <Product product={products[3]}></Product>
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
    margin: '10px',
    height: '200px',
    width: '300px',
    float: 'left'
  }
  const {name, price} = props.product;
  // console.log(name, price);
  return(
    <div style={productStyle}>
        <h3>{name}</h3>
        <h5>{price}</h5>
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
