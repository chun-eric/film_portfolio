
import React from 'react'
import { CssBaseline } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import { Actors, MovieInformation, Movies, Navbar, Profile } from '.'



const App = () => {

  return (
    <>
      <div style={{ display: 'flex', height: '100%' }}>
        <CssBaseline />
        <Navbar />
        <main style={{ flexGrow: '1', padding: '2em', width: '100%' }}>
          <div style={{ height: '70px' }} />
          <Routes>
            <Route exact path="/" element={<Movies />} />
            <Route path="/movie/:id" element={<MovieInformation />} />
            <Route path="/actor/:id" element={<Actors />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Routes>
        </main>
      </div >
    </>
  );
};

export default App