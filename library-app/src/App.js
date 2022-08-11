import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Index from './pages';
import Create from './pages/create';
import View from './pages/view';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='create' element={<Create />} />
          <Route path='view/:bookId' element={<View />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
