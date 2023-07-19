import { Route, Routes } from 'react-router-dom'
import './App.scss'
import { Footer, Navbar } from './components'
import {Contact, Home} from "./pages"

function App() {

  return (
    <>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/contact' element={ <Contact /> } />
          </Routes>
          <Footer />
        </div>
    </>
  )
}

export default App
