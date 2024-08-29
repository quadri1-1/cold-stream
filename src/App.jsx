import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Openbox from './pages/Openbox'
import Propertiesforsale from './pages/Propertiesforsale'
import Rentalproperties from './pages/Rentalproperties'
function App() {


  return (
    <div>
      <Router>
        <Header/>
       <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/openbox' element={<Openbox/> } />
          <Route path='/sale' element={<Propertiesforsale />} />
          <Route path='/rent' element={<Rentalproperties/> } />

        </Routes>
      </Router>
    </div>
  )
}

export default App
