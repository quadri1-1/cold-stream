import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Openbox from './pages/Openbox'
import Propertiesforsale from './pages/Propertiesforsale'
import Rentalproperties from './pages/Rentalproperties'
import OnlineRentalApplication from './pages/OnlineRentalApplication'
import Onlinepay from "./Openbox/Onlinepay"
import Needfinancing from './Home components/Needfinancing'
import Directions from './Home components/Directions'
import Owner from './owner Componenr/Owner'
import Ownerpotal from './pages/Ownerpotal'
import UtilityContacts from "./pages/UtilityContacts"
import Download from './pages/Download'
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
          <Route path='/pre-screen-rental-application' element={<OnlineRentalApplication/>}></Route>
          <Route path='/rent' element={<Rentalproperties />} />
          <Route path='/owner' element={<Owner />} />
          <Route path='/ownerpot' element={<Ownerpotal />} />
          <Route path='/utility' element={<UtilityContacts />} />
          <Route path='/download' element={<Download />} />
          <Route path='/online' element={<Onlinepay />} />
        </Routes>
        <Needfinancing />
        <Directions/>
      </Router>
    </div>
  )
}

export default App
