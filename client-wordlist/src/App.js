import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {  useEffect, useState } from 'react';

import React from 'react';

function App() {
  const [words, setWords] = useState([]);

  useEffect(() => {
                    let mounted = true;
                    fetch('http://localhost:4000/words')
                    .then(response => response.json())
                    .then (data =>
                                      {
                                        if (mounted){
                                            setWords(data);
                                        }
                                      } 
                                    )
                      return () => mounted = false;
                  }, []
            )


    return (
    <>
    {
      words.map(w=> <div>{w.word}</div>)
    }
    </>
  );
}

export default App;
