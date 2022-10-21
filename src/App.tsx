import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useEffect } from 'react';
import './App.css';

import { Clients } from './pages/Clients';
import { ClientForm } from './pages/ClientForm';
import { fetchClients } from './stores/clients';

function App() {
  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Clients />} />
          <Route path="/create" element={<ClientForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
