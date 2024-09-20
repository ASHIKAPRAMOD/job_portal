import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './module_1/Home'
import Login from './module_1/Login'
import Signup from './module_1/Signup'
import Nav from './module_1/Nav'
import Signup2 from './module_1/Signup2'
import Userview from './module_1/Userview'
import Admindashboard from './admin_module/Admindashboard'


function App() {
  const [] = useState(0)

  return (   
    <>
      
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/signup2" element={<Signup2 />}/>
          <Route path="/userview" element={<Userview />}/>
        </Routes>
        <Routes>
          <Route path="/admindashboard" element={<Admindashboard/>}/>
        </Routes>
        
        
      
    </>
  )
}

export default App
