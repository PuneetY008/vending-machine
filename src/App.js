import VendingMachine from './VendingMachine';
import Sardines from './Sardines';
import Soda from './Soda';
import Chips from './Chips';
import Navbar from './Navbar';
//****Router */
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<VendingMachine />} />
        <Route exact path='/soda' element={<Soda />} />
        <Route exact path='/sardines' element={<Sardines />} />
        <Route exact path='/chips' element={<Chips />} />
      </Routes>
    </div>
  );
}

export default App;
