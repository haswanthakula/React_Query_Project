import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Tanstack from './components/Tanstack';
import Traditional from './components/Traditional';
import Mutation from './components/Mutation';

const queryClient = new QueryClient();

function App() {
  console.log('Current route:', window.location.hash);
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tanstack" element={<Tanstack />} />
          <Route path="/traditional" element={<Traditional />} />
          <Route path="/mutation" element={<Mutation />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;