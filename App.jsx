import { useState } from 'react'
import styles from  './App.module.css'
import ButtonsContainer from './components/ButtonsContainer'
import Display from './components/Display'
function App() {
  let [calVal,setCalVal]=useState("");
  const onButtonClick=(buttonText)=>{
    if(buttonText==='C'){
      setCalVal("");
    }
    else if(buttonText==='='){
      const result=eval(calVal);
      setCalVal(result)
    }
    else{
      const newVal=calVal + buttonText;
      setCalVal(newVal);
    }
  } 
  return (
    <div className={styles.calculator}> 
      <Display displayValue={calVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>  
  )
}

export default App;
