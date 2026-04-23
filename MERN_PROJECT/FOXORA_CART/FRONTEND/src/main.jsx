import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UserProvider } from './context/UserContext.jsx'
import  Authcontext from './context/Authcontext.jsx'
createRoot(document.getElementById('root')).render(
  <Authcontext>
     <UserProvider>
    <App />
    </UserProvider>
  </Authcontext>,
)
