/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import RetailerLanding from './components/RetailerLanding';
import WholesalerLanding from './components/WholesalerLanding';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<RetailerLanding />} />
          <Route path="/wholesaler" element={<WholesalerLanding />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
