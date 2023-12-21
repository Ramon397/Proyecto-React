import { useState } from 'react';//para uso de hooks
import PropTypes from 'prop-types';

export const CounterApp = ({value}) => { 
  console.log('render');//cada vez que le das click a  un boton el componente se vuelve a ejecutar,y se mantiene el estado con el usaState
  const [counter,setCounter] = useState(value);
  const handleAdd=()=> {
    setCounter(counter+1);//agrega un nuemro al valor
    //setCounter((c)=>c+1); 
}
const handleSubtract=()=> setCounter(counter-1);//resta una 
const handleReset=()=> setCounter(value);//resetea el valor
  
  return (
    <>
        <h1>counterApp</h1>
        <h2>{counter}</h2>
        <button onClick={handleAdd}>+1</button>
        <button onClick={handleSubtract}>-1</button>
        <button onClick={handleReset}>reset</button>
    </>
  )
}


CounterApp.propTypes={
    value: PropTypes.number
}