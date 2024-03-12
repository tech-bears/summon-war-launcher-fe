import SuspenseLazy from '@renderer/components/SuspenseLazy'
import { RouteObject } from 'react-router-dom'

const Login = SuspenseLazy(() => import('@renderer/view/Login'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: Login
  },
  {
    path: '/login',
    element: Login
  }
]
export const routeFlatten = (routes: RouteObject[]): RouteObject[] => {
  const result: RouteObject[] = []
  routes.forEach((route) => {
    if (route.children) {
      result.push(...routeFlatten(route.children))
    } else {
      result.push(route)
    }
  })
  return result
}
export default routeFlatten(routes)
