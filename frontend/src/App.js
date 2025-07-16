import './App.css';
import { Route, BrowserRouter as Router,Routes } from 'react-router-dom';
import LandingPage from './pages/landing';
import Authentication from './pages/authentication';
import { AuthProvider } from './contexts/AuthContext';
import VideoMeetingComponent from './pages/videoMeeting';
import HomeComponent from './pages/Home';
import History from './pages/History';

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
        <Routes>
            <Route path='' element={<LandingPage />}/>
            <Route path='/auth' element={<Authentication />}/>
            <Route path='/home' element={<HomeComponent />}></Route>
            <Route path='/history' element={<History />}></Route>
            <Route path='/:url' element={<VideoMeetingComponent />} />
        </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
