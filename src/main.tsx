import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/HeaderComponents/Header'
import Content from './components/ContentCompontents/Content'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Content />
  </StrictMode>
)
