import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "bootstrap/dist/css/bootstrap.css"
import BooksProvider from './context/booksContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BooksProvider>

    <App />
    </BooksProvider>
  </StrictMode>,
)
