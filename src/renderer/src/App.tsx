import { Navigate, Route, Routes, useRoutes } from 'react-router-dom'
import routes from '@renderer/router'
const App: React.FC = () => {
  return (
    <div className="app">
      <Routes>
        {routes.map((route) => {
          return (
            <Route key={route.path} path={route.path} element={route.element} />
          )
        })}
      </Routes>
    </div>
  )
}
export default App
