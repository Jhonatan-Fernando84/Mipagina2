import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppFarmacia from './AppFarmacia';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppFarmacia/>
  </StrictMode>,
)
