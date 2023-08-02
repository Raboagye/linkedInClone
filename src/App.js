import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import LoginPage from './Components/LoginPage/LoginPage';
import NavBar from './Components/NavBar/NavBar';
import Posts from './Components/Posts/Posts';
import SideBar from './Components/SideBar/SideBar';
import Widgets from './Components/Widgets/Widgets';
import { auth } from './firebase';
import { login, logout } from './Redux/userSlice';
import Options from './Components/Options/Options';
import HouseIcon from '@mui/icons-material/House';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SmsIcon from '@mui/icons-material/Sms';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NavBottom from './Components/NavBar__Bottom/NavBottom';

function App() {
  const dispatch = useDispatch()
  const user = useSelector((state)=> state.user.user)

  useEffect(()=> {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login({
          email: authUser.email,
          uid: authUser.uid,
          photoUrl: authUser.photoURL,
          displayName: authUser.displayName
        }))
      } else {
        dispatch(logout())
      }
    })
  }, [])

  return (
    <div className="app">
      {!user ? <LoginPage /> :
        (
          <div className='app'>
            <NavBar />
            <div className='app__body'>
              <SideBar />
              <Posts />
              <Widgets />
            </div>
            <div className='navBar__bottom'>
                        <NavBottom Icon={HouseIcon} name="Home" />
                        <NavBottom Icon={SupervisorAccountIcon} name="My Network" />
                        <NavBottom Icon={BusinessCenterIcon} name="Jobs" />
                        <NavBottom Icon={SmsIcon} name="Messaging" />
                        <NavBottom Icon={NotificationsIcon} name="Notifications" />
                        
            </div>
          </div>
        )}

    </div>
  );
}

export default App;
