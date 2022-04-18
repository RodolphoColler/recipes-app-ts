import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Foods from './pages/foods/';

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
