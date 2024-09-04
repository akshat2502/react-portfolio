import { useState } from 'react'
import viteLogo from '/vite.svg'
import About from './components/about';
import Contact from './components/contact';
import Header from './components/header'
import Navbar from './components/navbar'
import Projects from './components/projects';
import Technology from './components/technology';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="overflow-hidden text-neutral-50 antialiased selection:text-purple-300 selection:bg-black">
      <div class="fixed top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className='container mx-auto px-8'>
      <Navbar />
      <Header />
      <About />
      <Technology />
      <Projects />
      <Contact />
      </div>
    </div>
    </>
  )
}

export default App;
