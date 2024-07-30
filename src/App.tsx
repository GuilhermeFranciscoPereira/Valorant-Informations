import AppProvider from './contexts/AppContext'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Router'
import { QueryClientProvider } from 'react-query'
import queryClient from './services/queryClient'
import './styles/globalStyles.css'

export default function App(): JSX.Element {
  return (
    <>
      <AppProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router}/>
        </QueryClientProvider>
      </AppProvider>
    </>
  )
}