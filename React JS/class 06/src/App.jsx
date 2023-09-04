import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloCMP from './components/HelloCMP'
import CategoryCmp from './components/CategoryCmp'
// import Login from './login'

import Cate10 from "./assets/img1.png"

function App() {

  // let fullName = "JAFFAR"

  let [fullName, setFullName] = useState("Jaffar Aman")
  let [isVisible, setIsVisible] = useState(true)

  console.log("fullName", fullName)

  const changeValue = () => {
    // setFullName("Jaffar Aman")
    const value = 18
    // if (value === 20) {
    //   console.log("true")
    // } else {
    //   console.log("false")
    // }

    // const condition = value === 20 ? "true" : "false"


    // if (value === 15) {
    //   console.log("true")
    // } else if (value === 20) {
    //   console.log("true")

    // } else {
    //   console.log("false")
    // }

    // const condition = value === 15 ? "true" : value === 20 ? "true" : "false"
    // console.log("condition", condition)

    // const condition = value === 15 || value === 20 ? "true" : "false"

    // console.log("condition", condition)



  }



  return (
    // <>
    //   {
    //     isVisible ? <div>
    //       <h1>HELLO {fullName}</h1>
    //     </div> : <p>HIDE COMPONENT</p>

    //   }

    //   <button onClick={() => {
    //     setIsVisible(false)
    //   }} >HIDE</button>
    //   <button onClick={() => {
    //     setIsVisible(true)
    //   }} >SHOW</button>
    // </>
    <>
      {/* <HelloCMP value={"WORLD"} />
      <HelloCMP value={"REACT"} />
      <HelloCMP value={"JAFFAR"} /> */}
      {/* <Login /> */}
      <CategoryCmp img="https://www.olx.com.pk/assets/mobiles.8c768c96bfde33f18fcf5af2a8b9cf71.png" />
      <CategoryCmp img="https://www.olx.com.pk/assets/vehicles.29fb808d5118f0db56f68a39ce5392e2.png" />
      <CategoryCmp img={Cate10} />
      <CategoryCmp />
      <CategoryCmp />
    </>

  )
}

export default App
