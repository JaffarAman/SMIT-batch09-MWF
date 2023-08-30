import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloCMP from './components/HelloCMP'

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
      <HelloCMP value={"WORLD"} />
      <HelloCMP value={"REACT"}  />
      <HelloCMP value={"JAFFAR"} />
    </>

  )
}

export default App
