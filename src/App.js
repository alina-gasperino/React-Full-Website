import logo from './logo.svg';
import './App.css';
import Header from './Header';
import HomeBanner from './HomeBanner';
import Search from './Search'
import Slideshow from './Slideshow'
import Blogs from './Blog'
import Learnmore from './LearnMore'
import Footer from './Footer'
function App() {
  return (
    <div className="App">
      <Header />
      <HomeBanner />
      <Search />
      <Slideshow />
      <Blogs />
      <Learnmore />
      <Footer />
    </div>
  );
}

export default App;
