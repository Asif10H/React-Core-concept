import './App.css';

function App() {
  const nayoks = ['Anwar', 'Jafor', 'Alomgir', 'Salman']
  const products = [
    {name: 'Photoshop', price: '$20.99/mo'},
    {name: 'Premiere Pro', price: '$20.99/mo'},
    {name: 'Premiere Rush', price: '$9.99/mo'},
    {name: 'Adobe Stock', price: '$22.99/mo'},
    {name: 'PDF Reader', price: '$2.99/mo'}
  ]
  // const nayokNames = nayoks.map(nayok => nayok);
  // console.log(nayokNames);

  //cse 45
  const friends = [
    {name: 'Sifat', id: 'C173013'},
    {name: 'jowel', id: 'C173016'},
    {name: 'Tomal', id: 'C173027'},
    {name: 'Jahid', id: 'C173006'},
    {name: 'Jishan', id: 'C173084'},
    {name: 'Hasib', id: 'C173086'},

  ]
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person.</p>
        <ul>
            {
              nayoks.map(nayok => <li>{nayok}</li>)
            }
            {
              products.map(product => <li>{product.name + " " + product.price}</li>)
            }
        </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }
        {/* cse 45 */}
        {
          friends.map(fd => <Friend friend={fd}></Friend>)
        }
        <Person name="Nayon" job="Front-End developer"></Person>
        <Person name="Jahid Hasan" job="Back-End developer"></Person>
        <Person name="Md.Jahid" job="Data Scientist"></Person>
      </header>
    </div>
  );
}
// cse 45 
function Friend(props){
  console.log(props);
  const friendStyle={
    borderRadius: '10px',
    boxShadow: '10px 10px 20px tomato',
    backgroundColor: 'lightgray',
    margin: '10px',
    height: '300px',
    width: '500px',
  }
  const {name, id} = props.friend;
  return(
        <div style={friendStyle}>
          <h1>Name: {name}</h1>
          <h2>ID: {id}</h2>
            {/* <h1>Name: {props.friend.name}</h1>
            <h2>ID: {props.friend.id}</h2> */}
        </div>
  )
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
