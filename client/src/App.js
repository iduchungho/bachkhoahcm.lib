// for rsuite
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'rsuite/dist/rsuite.min.css'; // or 'rsuite/dist/rsuite.min.css'

//for local css files
import './App.css';

//for react module files
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//for local component files
import HomeComponent from './component/Home';
import ToplevelNav from './component/ToplevelNav';
import Documentation from './component/Documentation';
import AboutUs from './component/Aboutus';
import News from './component/News';

function App() {
  return (
    <>
    <Router>
      <ToplevelNav/>
      <Routes>
          <Route path='/' element={<HomeComponent />}/>
          <Route path = '/aboutus' element = {<AboutUs />}/>
          <Route path='/doc/*' element = {<Documentation />}/>
          <Route path ='/news' element = {<News/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
