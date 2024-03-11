import './assets/normalize.css'
import 'virtual:windi.css'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import { StoresProvider, stores } from '@renderer/store'
const rootElement = document.getElementById('root')
const root = createRoot(rootElement as HTMLDivElement)

root.render(
  <HashRouter>
    <StoresProvider value={stores}>
      <App />
    </StoresProvider>
  </HashRouter>
)
