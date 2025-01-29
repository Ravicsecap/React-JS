import React, { useState } from 'react'

function StateInFunctionComponent() {
    
    const[name , setName] = useState('Ravi Sahani')
       const[value , setValue]  = useState(0)
    


    function updateName(){
        setName('Ashish Sahani')

        setValue(value + 1);

        
    }

  return (
    <div>
     
     {/* <h1> Hello , My name is {name}</h1> */}

     <h1>Display the value {Value}</h1>
     <button onClick={updateName}>Click</button>
      

    </div>
  )
}

export default StateInFunctionComponent;

// if i want to my varible value change that time use useState hook just bcus provide componet re-rendring and by state value also so changed.
// varibale cant change value bcus component will be not rendring.