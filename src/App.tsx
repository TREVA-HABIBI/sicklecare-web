import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './componets/Layout';
import Home from './pages/Home';
import CheckIn from './pages/CheckIn';
import Result from './pages/Results';
import Crisis from './pages/Crisis';
import Learn from './pages/Learn';
import Stories from './pages/Stories';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/check-in" element={<CheckIn />} />
          <Route path="/result" element={<Result />} />
          <Route path="/crisis" element={<Crisis />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/stories" element={<Stories />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
