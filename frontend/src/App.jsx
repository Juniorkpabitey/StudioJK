import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Article from './pages/Article'
import ArticlesList from './pages/ArticlesList'
import Navbar from './components/Navbar'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Router>
    <div className="max-w-screen-md mx-auto pt-20">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/article/:name" element={<Article/>} />
        <Route path="/articlelist" element={<ArticlesList/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
    <Navbar />

    </Router>
  )
}

export default App
