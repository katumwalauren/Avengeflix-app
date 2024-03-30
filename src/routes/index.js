
import React from 'react'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'

import Home from '../pages/Home'
import MovieDetail from '../pages/MovieDetail'

export default function AppRoute() {
  return (
    <Router>
      <Routes>
        <Route exact path="/search/:title" element={<Home />} />
        <Route exact path="/detail/:id" element={<MovieDetail />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}
