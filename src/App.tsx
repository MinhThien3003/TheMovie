import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Content, Slider } from './components/Chitietphim/chitietphim';

function App() {
  const mockMovie = {
    poster: 'movie-poster.jpg',
    img: 'movie-image.jpg',
    name: 'Movie Title',
    time: '120 mins',
    rating: '8.5',
    description: 'This is a description of the movie.',
  };
  
  return (
    <Router>
      <div>
        <header>
          <Navbar />
        </header>
        
        <main>
          <Routes>
            <Route
              path="/chitietphim"
              element={
                <div>
                  <Slider movie={mockMovie} />
                  <Content movie={mockMovie} />
                </div>
              }
            />
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
