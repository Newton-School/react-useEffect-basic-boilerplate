
import React, { useState } from 'react'

import { useEffect } from 'react';
import axios from 'axios';


/**
 * @usersApi : https://jsonplaceholder.typicode.com/users
 * @postApi :  https://jsonplaceholder.typicode.com/posts
 * @task1 :  onMount username sshould be displayed on frontend
 * @task2 : on clicked toggle, show post's body, again toggle between username and post's body. 
 */


const App = () => {
  const [image, setimage] = useState([]);
  const [toggle, settoggle] = useState(false);

  useEffect(() => {
    if (toggle) {
      axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
        setimage(res.data);

      })
    } else {
      axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
        setimage(res.data);
      })
    }
  }, [toggle])

  return (
    <div className="App">
      {
        image && image.map((item, index) => {
          return (
            <div key={item.id}>
              {
                item.userId ? <> <div>{item.body}</div>
                </> : <div> {item.username}</div>
              }
            </div>
          )
        })
      }
      <button id='toggle' onClick={() => settoggle((pre) => !pre)}> Toggle Post </button>
    </div>
  )
}


export default App;
