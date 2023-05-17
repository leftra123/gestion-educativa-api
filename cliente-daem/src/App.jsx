import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { EstablecimientoPage } from './pages/EstablecimientoPage';
import { EstablecimientoFormPage } from './pages/EstablecimientoFormPage';
import { Navigation } from './components/Navigation';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
      <div className='container mx-auto'>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/establecimiento" />} />
        <Route path="/establecimiento" element={<EstablecimientoPage />} />
        <Route path="/establecimiento-crear" element={<EstablecimientoFormPage />} />
        <Route path="/establecimiento/:id" element={<EstablecimientoFormPage />} />
      </Routes>
      <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;