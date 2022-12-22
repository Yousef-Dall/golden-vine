import React from 'react'
import Button from '../ele1/ele1';
import { useState } from 'react';
import Display from '../ele2/ele2';
import Input from '../ele4/input';


function Appp() {
	const [counter, setCounter] = useState(0);
  const incrementCounter = (incrementValue) => setCounter(counter+incrementValue);
	return (
        
    <div>
      <Button onClickFunction={incrementCounter} increment={+1} />
      <Button onClickFunction={incrementCounter} increment={+5} />
      <Button onClickFunction={incrementCounter} increment={+10} />
      <Button onClickFunction={incrementCounter} increment={+100} />
      <Button onClickFunction={incrementCounter} increment={-200} />
      
      <Display message={counter}/>
      <Input />

    </div>  
  );
}

export default Appp