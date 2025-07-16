// App.jsx
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <ScrollRestoration/>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
