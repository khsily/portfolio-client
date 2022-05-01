import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { About, Home, Project } from 'pages';
import { MainLayout } from 'components';

function App() {
  const location = useLocation();

  return (
    <MainLayout>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/project' element={<Project />} />
        </Routes>
      </AnimatePresence>
    </MainLayout>
  );
}

export default App;
