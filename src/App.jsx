import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import MainBody from './Components/MainBody'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <h1 className='w-[200px] border-2'>There is some issues.</h1> */}
     <Navbar />
     <MainBody />
     <Footer />
    </>
  )
}

export default App
