import { Route, Routes } from 'react-router-dom';
import { About, Home, Project } from 'pages';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/' element={<About />} />
      <Route path='/' element={<Project />} />
    </Routes>
  );
}

export default App;
