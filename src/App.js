import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { ADDITION, DECREMENT, DIVISION, INCREMENT, MULTIPLICATION, SUBTRACTION } from './store/actions.type';

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state)=>state);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value)
  };

  return (
    <div className="App">
      <h1>My Counter App</h1>
      <h1>Count : {state.count}</h1>
      <div>
        <button onClick={()=>dispatch({type:INCREMENT})}>Increment</button>
        <button onClick={()=>dispatch({type:DECREMENT})}>Decrement</button>
      </div>
      <h2>Custom Calculator</h2>
      <input value={inputValue} type='number' onChange={(e)=>handleChange(e)}/>
      <div>
        <button onClick={()=>{
            dispatch({type: ADDITION, value:inputValue})
            setInputValue('')
          }}>Addition</button>
        <button onClick={()=>{
            dispatch({type: SUBTRACTION, value:inputValue})
            setInputValue('')
          }}>Subtraction</button>
        <button onClick={()=>{
            dispatch({type: MULTIPLICATION, value:inputValue})
            setInputValue('')
          }}>Multiplication</button>
        <button onClick={()=>{
            dispatch({type: DIVISION, value:inputValue})
            setInputValue('')
          }}>Division</button>
      </div>
    </div>
  );
}

export default App;
