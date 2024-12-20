import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// index.jsx & index.css
import './aConnection/bShadcnConnection/index.css'
import AppConnection from './aConnection/aAppConnection/index.tsx'

//  Provider
import { Provider as ReduxProvider } from 'react-redux'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter }   from 'react-router-dom'

// XXX XXXX XXXX
import reduxConnection from './aConnection/dReduxConnection/index.ts'
import { ThemeProvider } from './aConnection/bShadcnConnection/components/theme-provider.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReduxProvider store={reduxConnection} >
      <HelmetProvider>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <BrowserRouter>
            <AppConnection />
          </BrowserRouter>
        </ThemeProvider>
      </HelmetProvider>
    </ReduxProvider>    
  </StrictMode>,
)
