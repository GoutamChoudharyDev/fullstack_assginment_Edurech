import Home from './pages/Home'
import About from './pages/About'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Technologies from './pages/Technologies'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
        <Route path='/technologies' element={<Technologies />} />
      </Routes>
    </>
  )
}

export default App
