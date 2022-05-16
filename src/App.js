import './App.css';

// components
import Profile from './components/Profile';
import UserList from './components/UserList';

//CONTEXT
import UserState from './context-user/User/UserState';

function App() {
  return (
    <UserState>
        <Profile/>
        <UserList/>
    </UserState>
  );
}

export default App;
