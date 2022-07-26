import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import Layout from 'components/Layout'

import Home from 'views/Home'
import Explore from 'views/Explore'
import Collectibles from 'views/Collectibles'

const theme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/explore/collectibles' element={<Collectibles />} />
            <Route path='/explore' element={<Explore />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
