import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './Pages/Team/User/User.jsx';
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';
import Team from './Pages/Team/Team.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import MainLayout from './Layouts/MainLayout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/team/:user" element={<User />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
