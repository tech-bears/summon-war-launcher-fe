import './assets/normalize.css'
import 'virtual:windi.css'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { StoresProvider, stores } from '@renderer/store'
const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement as HTMLDivElement)

root.render(
  <BrowserRouter>
    <StoresProvider value={stores}>
      <App />
    </StoresProvider>
  </BrowserRouter>
)
