import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import EditTour from './components/EditTour';
import Tour from './components/Tour'
import Tours from './components/Tours'

function App() {
  return (
    <div className="App">
      Tourist Place Tracker
      <Router>
        <Routes>
        <Route path='/' element={<Tours/>}/>
        <Route path='/:id' element={<Tour/>}/>
        <Route path='/:id/edit' element={<EditTour/>}/>
        </Routes>
        
      </Router>
      
    </div>
  );
}

export default App;
