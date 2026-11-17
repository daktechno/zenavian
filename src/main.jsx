import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '@fontsource-variable/plus-jakarta-sans'
import './styles/index.css'
import App from './App'

const root = document.getElementById('root')
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
// Prerendered pages are hydrated; the dev server (empty #root) renders normally.
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
