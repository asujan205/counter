import logo from './logo.svg';
import './App.css';
import react,{useState} from 'react';





const App=() =>{
 const [counter, setCounter] = useState(0)
  const incrementClick=()=>
{

setCounter(counter+1);
}
const decreamentClick=()=>{

  setCounter(counter-1);
}
const resetClick=()=>{
setCounter(0);
}
  
  return (
  <div className="mainhead">  
     

      Counter 
      <div style={{
        fontSize: '120%',
        position: 'relative',
        top: '3vh',
      }}>
        {counter}
      </div>
      
        <button className="increment"
          onClick={incrementClick}>Increment</button>
          
        <button className="decrement"
          onClick={decreamentClick}>Decrement</button>
      <button className="reset"
          onClick={resetClick}>Reset</button>
      
    </div>
  )
    }
  

export default App;
