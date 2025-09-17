import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import {GoogleOAuthProvider} from '@react-oauth/google'
const CLIENT_ID="586446085626-ogsodruh5sr0k00hkianpfn7rtpv440d.apps.googleusercontent.com";
createRoot(document.getElementById('root')).render(
  <StrictMode>
<GoogleOAuthProvider clientId={CLIENT_ID}>
    <App />
    </GoogleOAuthProvider>
  </StrictMode>,
)
