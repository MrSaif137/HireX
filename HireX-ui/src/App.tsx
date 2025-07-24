import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import './App.css'
import Header from './Components/Header/Header';
import '@mantine/notifications/styles.css';
import { Notifications } from '@mantine/notifications';
import { Provider } from 'react-redux'
import Store from './Store';
import AppRoutes from './Pages/AppRoutes';
import Footer from './Components/Footer/Footer';

const theme = createTheme({
  colors: {
    'brightSun': ['#fffbeb','#fff3c6','#ffe588','#ffbd20','#f99b07','#dd7302','#b75006','#943c0c',
      '#7a330d','#461902',],
    'mineShaft': ['#f6f6f6','#e7e7e7','#d1d1d1','#b0b0b0','#888888','#6d6d6d','#5d5d5d','#4f4f4f','#454545',
      '#3d3d3d','#2d2d2d',
    ]

  },
  /** Put your mantine theme override here */
});


function App() {


  return (
    <>
      <Provider store={Store} >
        <MantineProvider theme={theme}>
          <Notifications position="top-center" zIndex={1000} />
          <div className='relative'>

            <Header />
            <AppRoutes />
            <Footer />
          </div>

        </MantineProvider>

      </Provider>


    </>
  )
}

export default App
