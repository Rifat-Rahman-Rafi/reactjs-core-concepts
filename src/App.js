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

      <Person></Person>
      <Person></Person>
     
    </div>
  );
}


function Person(){
  return <h1>Shakib AL Hasan</h1>
}

export default App;
