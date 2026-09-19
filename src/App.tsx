import { Route, Routes } from 'react-router-dom'
import Header from './modules/Header'
import Presentation from './modules/Presentation'
import Projects from './modules/Projects'
import About from './modules/About'
import Contact from './modules/Contact'

function App() {

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Presentation/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
