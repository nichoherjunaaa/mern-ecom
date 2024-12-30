import Login from "./pages/Login"
import Register from "./pages/Register"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
  )
}

export default App
