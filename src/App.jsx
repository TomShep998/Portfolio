
import './App.css'
import Home from './Components/Home.jsx'
import NavBar from './Components/Navbar'
import AboutMe from './Components/AboutMe'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import {Route, Routes} from 'react-router-dom'
function App() {
 

  return (


    <>
    <main className=' flex  min-h-screen flex-col bg-[#18181b]'>
      <NavBar />
      <div className='container mt-24 mx-auto px-12 py-4'>
        
        <Home />
        <AboutMe />
        <Projects />
        <Contact />
       
        

      </div>

      
    
         

    </main>
    </>
  )
}

export default App
