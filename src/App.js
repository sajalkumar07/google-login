import { useAuth0 } from '@auth0/auth0-react';
import img1 from './img/logo.png'
import './App.css';

function App() {
  const {user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  console.log("current user", user)
  return (  
    <div className="App">
      <header className="App-header">
        {isAuthenticated && <h3>Hello! <br/>{user.name} </h3>}
        {
          isAuthenticated ?(
            <button onClick={(e)=>logout()}>logout</button>
          ):(
            <button className="google-login-button" onClick={() => loginWithRedirect()}>
            <div className='google-image'>
              <img src={img1} alt="Google logo" width="20" height="20" />
            </div>
            Log in with Google
          </button>
        )}
       
      </header>
    </div>
  );
}

export default App;
