import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Pages/Home'
import Header from './components/header/Header'
import Auth from './components/Pages/Auth'
import Save from './components/Pages/save'
function App() {

  return (
    <div className='app'>

      <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/save' element={<Save/>}/>
          <Route path='/auth' element={<Auth/>}/>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
