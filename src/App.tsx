import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Banners from './components/Home/Banners';
// import Chitietphim from './components/Chitietphim/chitietphim';

function App() {
  return (
    <Router>
      <div className='mx-auto max-w-screen-2xl'>
        <header>
          <Navbar />
        </header>
        
        <main>
          <Routes>
            {/* <Route
              path="/"
              element={
                <div>
                  <Chitietphim />
                </div>
              }
            /> */
            }
            {
              <Route
              path='/'
              element={
                <div>
                  <Banners />
                </div>
              }
              />
            }
          </Routes>
        </main>
        
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
