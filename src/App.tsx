import { Route, Routes } from 'react-router-dom'
import AboutPageAsync from './pages/AboutPage/AboutPage.async'
import MainPageAsync from './pages/MainPage/MainPage.async'
import { Suspense, useContext, useState } from 'react'

import './styles/index.scss';
import './styles/reset.scss';
import { Theme, ThemeContext } from './theme/ThemeContext';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPageAsync />} />
          <Route path="/" element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App