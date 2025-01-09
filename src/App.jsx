import { Navbar } from "./components/Navbar";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Reviews from "./sections/Reviews";
import Speacials from "./sections/Speacials";


function App() {
 

  return (
    <div>
      <Navbar />
      <Hero />
      <Speacials />
      <Reviews />
      <Footer />
    </div>
  )
}

export default App
