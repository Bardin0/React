import Home from './components/routes/home/home.components'
import Navigation from './components/routes/navigation/navigation.component'
import { Routes, Route } from 'react-router-dom'

const Shop = () => {
  return (
      <h2>I am the shop</h2>
  )
}

const App = () => {

  return (
    <Routes>
        <Route path='/' element={<Navigation/>}>
            <Route index element={<Home/>}/>
            <Route path='shop' element={<Shop/>}/>
        </Route>
    </Routes>
  )
}

export default App
