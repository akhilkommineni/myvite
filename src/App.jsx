import './App.css'
import Counter from './components/Counter'
import Like from './components/likeComponent/Like'
import { useState } from 'react'


export default function App() {

  const [reset,setReset]=useState(false)
  const [like,setLike]=useState(0)
  const resetCount=()=>{
    setReset((preVal)=>{!preVal})
  }

  const increaseLike=()=>{
    setLike(like+1)
  }


  return (
    <>
    <Counter key={`counter1-${reset}`}/>
    <hr/>
    <Counter key={`counter2-${reset}`}/>
    <hr/>
    <hr/>
    <button onClick={resetCount}>reset</button>
    <h1>Below is the Like component</h1>
    <p>No.of Likes:{like}</p>
    <Like setlike={increaseLike}/>
    </>
  )

}