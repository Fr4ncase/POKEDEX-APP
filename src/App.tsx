import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "@/pages/Home";
import { PokeDetails } from "@/pages/PokeDetails";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<PokeDetails />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;