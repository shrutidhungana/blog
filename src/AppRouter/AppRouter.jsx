import React from 'react';
import { HashRouter as Router, Navigate, Routes, Route } from 'react-router-dom';
import Blog from '../pages/Blog';
import Home from '../pages/Home';

const AppRouter = () => {
  return (
      <div className='container'>
          <Router>
              <Routes>
                  <Route path='/' exact element={<Home />} />
                  <Route path='/blog/:id' exact element={<Blog />} />
                  
              </Routes>
          </Router>
      </div>
  )
}

export default AppRouter