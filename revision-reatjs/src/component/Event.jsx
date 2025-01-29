import React from 'react'

function Event() {

    let fname = 'Ravi Sahani';

    function nameChange(){

      fname = 'Ashish Sahani'
      alert(fname);
    }

    console.log('rendering')
    
    
    
    
    return (
      <div>

        <h1>My name is a {fname}</h1>
        <button onClick={nameChange}>Click</button>

        {/* <button on onClick={() =>(alert('Ashish sahani'))}>Click me</button> */}





    </div>
  )
}

export default Event;

// if i want to my u.i changes that time use useState and props 