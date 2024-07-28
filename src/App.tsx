import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Router'
import './styles/globalStyles.css'

export default function App(): JSX.Element {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}