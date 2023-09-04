import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 0
  // let [counter, setCounter] = useState(0)
  // let [refresh, setRefresh] = useState("false")

  // const addCounter = () => {
  //   setCounter(++counter)
  //   setRefresh((prev) => "true")
  //   console.log("refresh", refresh)
  // }

  // const minusCounter = () => {
  //   if (counter <= 0) {
  //     return false
  //   }
  //   setCounter(--counter)
  //   setRefresh((prev) => "false")
  // }

  // console.log("rerender")

  // const arr = ["APPLE", "MANGO", "ORANGE"]
  // const cars = [
  //   { id: 1, brand: 'Ford' },
  //   { id: 2, brand: 'BMW' },
  //   { id: 3, brand: 'Audi' }
  // ];



  return (
    <>
      {/* <h1>COUNT: {counter} </h1>
      <h1>"refresh"{refresh} </h1>
      <button onClick={minusCounter}>MINUS</button>
      <button onClick={addCounter} >PLUS</button> */}
      {/* {
        arr.map((value, index) => {
          return (
            <h1 key={index} >{value}</h1>
          )
        })
      } */}

      {/* {
        cars.map((car, index) => {
          console.log(car)
          return (
            <h1 key={car.id} >{car.brand}</h1>
          )
        })
      } */}
      {/* {
        cars.map((car, index) =>
        (
          <h1 key={car.id} >{car.brand}</h1>
        )
        )
      } */}

      <div className='w-full bg-slate-600 h-[50px]'>
        <h1 className='text-center font-bold text-4xl '>TODO</h1>
      </div>

      <div className=' flex justify-center  items-center mt-5 flex-col '>

        <div className='w-[70%]'>
          <input type="text" placeholder='ENTER YOUR NAME'
            className='border w-full rounded-lg p-3 outline-none border-gray-600 '
          />

        </div>
        <div className='flex mt-10'>
          <button className='border bg-cyan-400 mx-3 
           border-gray-950	
            px-3 py-1 w-24
            transition-all	
            hover:bg-cyan-700
              hover:rounded-lg
            ' >ADD</button>
          <button className='border bg-cyan-400 mx-3 
           border-gray-950	
            px-3 py-1 w-24
            transition-all	
            hover:bg-cyan-700
              hover:rounded-lg
            '>DELETE</button>

        </div>
      </div>




    </>
  )
}

export default App
