import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Countdown from './components/Countdown'
import Invitation from './components/Invitation'
import Gallery from './components/Gallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <Countdown/>
      <Invitation/>
      <Gallery/>
    </div>
  )
}

export default App
