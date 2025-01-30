import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Login from './pages/Login'
import Register from './pages/Register'
import Feed from './pages/Feed'

import './index.css'
import { AuthContextProvider } from './Auth'

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter basename='dio-page/'>
        <AuthContextProvider>
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/feed' element={<Feed />} />
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </StrictMode>,
  )
}
