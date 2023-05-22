import Front  from './Frontpage';
import './App.css';
import Resume from './Resume'
import background from './assets/download.png'
import { Routes,Route, Link } from 'react-router-dom';


export default function App() {
  return (
  <div className='container' style={{ backgroundImage: `url(${background})` }}>
    <Routes>
     <Route path='/' element={<Front/>}/>
    <Route path='/resume' element={<Resume/>}/>
      </Routes>

    {/* <Frontpage/>
  <Aboutpage/>
  <Mydesignworks/>
  <Contact/> */}
 
 
  </div >
  );
}


