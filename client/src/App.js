import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./views/Home"
import Mdt from './views/Mdt';
import Landing from './views/Landing';
import Civ from './views/Civ';
import Cad from './views/Cad';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route element={<Landing/>} path='/' default></Route>
          <Route element={<Home/>} path='/dash'></Route>
          <Route element={<Cad/>} path='/cad/dispatch'></Route>
          <Route element={<Mdt/>} path='/cad/onduty'></Route>
          <Route element={<Civ/>} path='/cad/civ'></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
