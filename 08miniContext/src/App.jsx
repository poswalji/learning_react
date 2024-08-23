
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './componants/Login'
import Profile from './componants/Profile'

function App() {
  

  return (
    <UserContextProvider>
   <h1>React with night</h1>

   <Login />
   <Profile/>
    </UserContextProvider>
  )
}

export default App
