import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipesAppProvider from './context/RecipesAppProvider';
import DetailedFood from './pages/DetailedFood';
import Foods from './pages/Foods';

function App() {
  return (
    <RecipesAppProvider>
      <Router>
        <Routes>
          <Route path="/foods/:id" element={ < DetailedFood/>  } />
          <Route path="/foods" element={ <Foods /> } />
        </Routes>
      </Router>
    </RecipesAppProvider>
  );
}

export default App;
