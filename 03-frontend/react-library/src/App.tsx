import './App.css';
import { HomePage } from './layouts/HomePage/HomePage';
import { Footer } from './layouts/NavBarAndFooter/Footer';
import { Navbar } from './layouts/NavBarAndFooter/Navbar';

function App () {
  console.log("APP coMPONENT RENDERING");
  return (
    <div>
      <Navbar/>
      <HomePage/>
      <Footer />
    </div>
  );
}

export default App;
