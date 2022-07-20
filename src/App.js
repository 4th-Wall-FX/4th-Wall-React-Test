import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.scss';
import Contacts from './components/pages/Contacts/Contacts';
import Locations from './components/pages/Locations/Locations';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Contacts />} />
          <Route  path='/locations' element={<Locations />} />
        </Routes>
    </Router>
  );
}

export default App;
