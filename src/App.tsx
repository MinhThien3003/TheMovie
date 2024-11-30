import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Banners from './components/Home/Banners';
import MovieList from './components/Home/MovieList';
import MovieUpcoming from './components/Home/MovieList-Upcoming';
import Chitietphim from './components/Chitietphim/chitietphim';
<<<<<<< HEAD
import Promotions from './components/Home/Promotions';

=======
import BookingTicket from './components/Home/BookingTicket';
>>>>>>> d6a20fbf310635da7e3f092998055d24a71b3feb
function App() {
  // console.log("ENV TEST: ", import.meta.env.VITE_API_KEY)

  return (
    <Router>
      <div className='mx-auto max-w-screen-2xl'>
        <header>
          <Navbar />
        </header>
        
        <main>
          <Routes>
            <Route path='/' element={
                <div>
                  <Banners />
                  <MovieList/>
                  <MovieUpcoming/>
                  <Promotions/>
                </div>
              }
              />
            <Route path="/chitietphim/:id" element={<Chitietphim />} />
            <Route path="/booking" element={<BookingTicket />} />
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
