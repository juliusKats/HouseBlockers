import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import SignIn from './pages/SignIn'
import Header from './components/Header'
export default function App() {
  return (
   
   <BrowserRouter>
   <Header/>
        <Routes>
          <Route path='/' element={<Home /> } />
          <Route path='/about' element={<About />  } />
          <Route path='/contactus' element={<ContactUs/>  } />
          <Route path='/signin' element={<SignIn />  } />
        </Routes>
   </BrowserRouter>

  )
}
