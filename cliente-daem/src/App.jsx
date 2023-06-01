import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { EstablecimientoPage } from './pages/establecimiento/EstablecimientoPage';
import { EstablecimientoFormPage } from './pages/establecimiento/EstablecimientoFormPage';
import { DocentePage } from './pages/docente/DocentePage';
import { DocenteFormPage } from './pages/docente/DocenteFormPage';
import { Navigation } from './components/layouts/Navigation';
import { Toaster } from 'react-hot-toast';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <div className='container-fluid'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/establecimiento/*" element={<><Navigation /><EstablecimientoPage /></>} />
          <Route path="/establecimiento-crear" element={<><Navigation /><EstablecimientoFormPage /></>} />
          <Route path="/establecimiento/:id" element={<><Navigation /><EstablecimientoFormPage /></>} />
          <Route path="/docente/*" element={<><Navigation /><DocentePage /></>} />
          <Route path="/docente-crear" element={<><Navigation /><DocenteFormPage /></>} />
          <Route path="/docente/:id" element={<><Navigation /><DocenteFormPage /></>} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
