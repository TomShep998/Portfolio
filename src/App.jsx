
import './App.css'
import Home from './Components/Home.jsx'
import NavBar from './Components/Nvabar'
import AboutMe from './Components/AboutMe'
import Projects from './Components/Projects'

function App() {
 

  return (


    <>
    <main className=' flex  min-h-screen flex-col bg-[#212626] '>
      <NavBar />
      <div className='container mt-24 mx-auto px-12 py-4'>
        
        <Home />
        <AboutMe />
        <Projects />
       
        

      </div>
      
    
         

    </main>
      
      
     
    </>
  )
}

export default App
