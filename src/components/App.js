
import React, { useState } from 'react'

import { useEffect } from 'react';
import axios from 'axios';

/**
 *
 * @postApi :  https://jsonplaceholder.typicode.com/users
 * @task1 :  onMount usernames should be displayed on frontend
 **/


const App = () => {

  const [image, setimage] = useState([]); 


  return (
    <div className="App">
      <h1>Usernames</h1>
      {
        image && image.map((item, index) => {
          console.log(item)
          return (
            <div key={item.id+index}>
              {
               <div> {item.username}</div>
              }
            </div>
          )
        })
      }
     </div>
  )
}


export default App;
