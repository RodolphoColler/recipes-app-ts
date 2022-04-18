import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Foods from './pages/Foods';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/foods" element={ <Foods /> } />
      </Routes>
    </Router>
  );
}

export default App;
