import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Homepage/HomePage'
import TopNav from './components/Nav/TopNav'
import Footer from './components/Footer/Footer'
import Error404 from './components/ErrorPages/Error404'
import ViewProduct from './pages/Product/ViewProduct'


function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <Routes>
        <Route path='*' element={<Error404 /> } />
        <Route path='/' element={<HomePage />} />
        <Route path='/ViewProduct' element={<ViewProduct /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App