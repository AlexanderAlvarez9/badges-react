import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './Layout'
import Home from '../pages/Home'
import BadgeNew from '../pages/BadgeNew'
import BadgeEdit from '../pages/BadgeEdit'
import BadgeDetails from '../pages/BadgeDetailsContainer'
import Badges from '../pages/Badges'
import NotFound from '../pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/badges" element={<Badges />} />
          <Route path="/badges/new" element={<BadgeNew />} />
          <Route path="/badges/:badgeId/" element={<BadgeDetails />} />
          <Route path="/badges/:badgeId/edit" element={<BadgeEdit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App;