import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Landingpage from "./pages/Landing"
import Authentication from "./pages/authentication"
import { AuthProvider } from "./contexts/AuthContext"
import VideoMeet from "./pages/VideoMeet"
import Home from "./pages/home";
import History from "./pages/history";
function App() {
  


  return (
    <>
      <Router>
        <AuthProvider>
        <Routes>
          <Route path="/" element={<Landingpage/>}/>
          <Route path="/auth" element={<Authentication/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/history" element={<History/>}/>
          <Route path="/:url" element={<VideoMeet/>} />
        </Routes>
        </AuthProvider>
      </Router>
    </>
  )
}

export default App
