import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Index from './componentes/Index/Index';
import Menu from './componentes/Menu/Menu';
import SobreNos from './componentes/SobreNos/SobreNos';
import Contato from './componentes/Contato/Contato';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/sobreNos" element={<SobreNos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
