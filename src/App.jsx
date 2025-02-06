import { Navbar } from "./components/nav/Navbar";
import { Home } from "./pages/home/Home";
import { Reservation } from "./pages/reservation/Reservation";
import { BrowserRouter, Routes, Route } from "react-router";


function App() {
 

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservation" element={<Reservation />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
