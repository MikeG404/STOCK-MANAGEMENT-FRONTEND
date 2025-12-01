import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router'
import DashboardLayout from './layouts/Dashboard.layout.tsx'
import DashboardArticlesRoute from './routes/DashboardArticles.route.tsx'
import './index.css'
import App from './App.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="articles" replace />
      },
      {
        path: "articles",
        element: <DashboardArticlesRoute />
      },
      {
        path: "dynamic-test",
        element: <div>Dynamic Test</div>
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
