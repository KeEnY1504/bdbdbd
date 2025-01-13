import { useState } from 'react'

// header
import HeaderTop from './components/header/header'
import { Routes } from './Routes'; // Импортируем Router
import './App.scss'


function App() {
  return (
    <>
      <HeaderTop />
      <Routes />
    </>
  );
}

export default App
