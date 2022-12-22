// import 'bootstrap/dist/css/bootstrap.min.css';
import 'rsuite/dist/rsuite.min.css'; // or 'rsuite/dist/rsuite.min.css'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeComponent from './component/Home';
import ToplevelNav from './component/ui/ToplevelNav';
import Documentation from './component/Documentation';
import AboutUs from './component/Aboutus';
function App() {
  return (
    <>
    <Router>
      <ToplevelNav/>
      <Routes>
          <Route path='/' element={<HomeComponent />}/>
          <Route path = '/aboutus' element = {<AboutUs />}/>
          <Route path='/doc' element = {<Documentation />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
