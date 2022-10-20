import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import { Clients } from './pages/Clients';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Clients />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
