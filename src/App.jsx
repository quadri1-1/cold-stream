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
import RepairRequest from "./pages/RepairRequest"
import Download from './pages/Download'
import Details1 from './Details/Details1'
import Details2 from './Details/Details2'
import Filloutapplication from './Rentalproprties components/FIlloutapplication'
import Employeeportal from './pages/Employeeportal'
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
          <Route path='/pre-screen-rental-application' element={<OnlineRentalApplication/>} />
          <Route path='/repair-request' element={<RepairRequest/>} />
          <Route path='/rent' element={<Rentalproperties />} />
          <Route path='/owner' element={<Owner />} />
          <Route path='/ownerpot' element={<Ownerpotal />} />
          <Route path='/utility' element={<UtilityContacts />} />
          <Route path='/download' element={<Download />} />
          <Route path='/online' element={<Onlinepay />} />
          <Route path='/detail' element={<Details1 />} />
          <Route path='/detail2' element={<Details2 />} />
          <Route path='/sales-application' element={<Filloutapplication />} />
          <Route path='/employee' element={<Employeeportal/>} />
        </Routes>
        <Needfinancing />
        <Directions/>
      </Router>
    </div>
  )
}

export default App
