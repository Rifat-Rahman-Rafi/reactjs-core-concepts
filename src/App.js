import logo from './logo.svg';
import './App.css';

const name=" Rifat Rahman"

const number=555

const customStyle={
  color:'purple',
  backgroundColor:'white'
  
}

function App() {
  return (
    <div className="App">

      <Person name="Bappa Raj" nayka="Mousumi"></Person>
      <Person name="Rubel" nayka="Cheka"></Person>
      <Person name="Kuber" nayka="Kopila"></Person>
     
      <Friend movie="Singam" phone="01776"></Friend>
      <Friend movie="Sultan" phone="01309"></Friend>
     
    </div>
  );
}


function Person(props){
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>Nayka:{props.nayka}</p>
    </div>
  )
}

function Friend(props){
  return(
    <div className='container'>
      <h3>Name : {props.movie}</h3>
      <p>phone : {props.phone}</p>
    </div>
  )
}

export default App;
