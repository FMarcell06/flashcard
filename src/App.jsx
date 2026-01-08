import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './pages/Home'
import { Route, Routes } from 'react-router'
import { Topics } from './pages/Topics'
import { Header } from './components/Header'
import { AddCard } from './pages/AddCard'
import { AddTopic } from './pages/AddTopic'
import { Topic } from './pages/Topic'
import '@fontsource/inter';
import { useContext } from 'react'
import { AccessContext, MyAccessProvider } from './context/MyAccessProvider'


function App() {
  const [count, setCount] = useState(0)
  const {hasAccess} = useContext(AccessContext)

  return (
    <div className="container">
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/topics' element={<Topics />}></Route>
        <Route path='/addcard' element={hasAccess?<AddCard />:<Home/>}></Route>
        <Route path='/addtopic' element={hasAccess?<AddTopic />:<Home/>}></Route>
        <Route path='/topic/:id' element={<Topic />}></Route>
        <Route path='/addcard/:id' element={hasAccess?<AddCard /> : <Home/>}></Route>
        <Route path='/edit/:id/:cardId' element={hasAccess?<AddCard />:<Home/>}></Route>
      </Routes>
    </div>
  )
}

export default App
