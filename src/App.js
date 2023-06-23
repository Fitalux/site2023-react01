import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './components/pages/Home';
import CardPage from './components/pages/CardPage';
import MoviePage from './components/pages/MoviePage';
import YoutubePage from './components/pages/YoutubePage';
import UnsplashPage from './components/pages/UnsplashPage';
import Footer from './components/layout/Footer';
import IntroPage from './components/pages/IntroPage';

function App() {
  return (
    <BrowserRouter>
      <Header attr={['header__wrap', 'Neo5', 'bg-blue']} />
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/intro" element={<IntroPage />} />;
        <Route path="/card" element={<CardPage />} />;
        <Route path="/movie" element={<MoviePage />} />;
        <Route path="/youtube" element={<YoutubePage />} />;
        <Route path="/unsplash" element={<UnsplashPage />} />;
      </Routes>
      <Footer attr={['footer__wrap', 'Neo5', 'bg-blue']} />
    </BrowserRouter>
  );
}

export default App;
