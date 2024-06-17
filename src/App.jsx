import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Home from "./pages/Home"
import ProductDetail from "./pages/ProductDetail"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar"

import './App.css'

function App() {

  return (
    <Router>
     <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <Sidebar />
      <Footer />   
    </Router>
  )
}

export default App
