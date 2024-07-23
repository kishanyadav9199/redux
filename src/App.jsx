import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import { useDispatch } from 'react-redux'

function App() {

const dispatch= useDispatch();


  return (
    
    <div className='w-full h-full p-10 bg-red-800'>
      <button onClick={e=>dispatch({type:'INCREMENT'})} className='px-5 py-3 bg-red-200  rounded-lg'>Increment</button>
      <h1 className='font-bold   text-3xl'>Redux</h1>
      <Counter/>
      <button onClick={e=>dispatch({type:'DECREMENT'})} className='px-5 py-3 bg-red-200 rounded-lg'>Decrement</button>
    </div>
    
    
  )
}

export default App
