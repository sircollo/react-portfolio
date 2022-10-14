import './App.css';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Landing from './components/Landing'
import About from './components/About'
import Projects from './components/Projects'
import Contact from   './components/Contact'
function App() {

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route>
            <Route exact path='/' element={<Landing/>}/>
            <Route exact path='/about' element={<About/>}/>
            <Route exact path='/projects' element={<Projects/>}/>
            <Route exact path='/contact' element={<Contact/>}/>
          </Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
