import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Myrooter from './components/Myrooter.jsx'
import { AuthProvider } from './context/callApiContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
          <Myrooter/>
    </AuthProvider>
  </React.StrictMode>,
)
