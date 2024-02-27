import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import Topbar from "./scenes/global/Topbar"
import Sidebar from "./scenes/global/Sidebar"
// import Sidebar from "./scenes/global/Sidebar"
import Dashboard  from './scenes/dashboard/index'
import Team  from './scenes/team/index'
import Contacts  from './scenes/contact/index'
import Invoices  from './scenes/invoices/index'
import Bar  from './scenes/bar/index'
import Form  from './scenes/form/index'
import Pie  from './scenes/pie'
import FAQ  from './scenes/faq'
import Line  from './scenes/line'
import Geaography  from './scenes/geo/index'
import Calendar  from './scenes/calendar/index'


function App() {

  const [theme, colorMode] = useMode()

  return (
    <ColorModeContext.Provider value={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
        <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='team' element={<Team />} />
              <Route path='contacts' element={<Contacts />} />
             <Route path='invoices' element={<Invoices />} />
              <Route path='form' element={<Form />} />
              <Route path='/calendar' element={<Calendar />} /> 
              <Route path='/faq' element={<FAQ />} />
              
               <Route path='/bar' element={<Bar />} />
              <Route path='/pie' element={<Pie />} />
              <Route path='/line' element={<Line />} />
              <Route path='/geography' element={<Geaography />} />
              {/* 1,544 */}
              1.29
              1.02
              1,957
            </Routes>
          </main>
        </div>
      </ThemeProvider>

    </ColorModeContext.Provider>
  )
}

export default App
