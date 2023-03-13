import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom'

import Main from '../pages/main/Main'

const router = createBrowserRouter(
  createRoutesFromElements(<Route path='/' element={<Main />} />)
)

export default router
