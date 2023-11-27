import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './routes/Home/Index.jsx'
import Error from './routes/Error/Index.jsx'
import { ThemeProvider } from './context/ThemeContext/Index.jsx'
import CardsPage from './routes/CardsPage/Index.jsx'
import NewCards from './routes/NewCards/Index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/cards',
        element: <CardsPage />
      },
      {
        path: '/newcards',
        element: <NewCards />
      },
    ],
    errorElement: <Error />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
)
