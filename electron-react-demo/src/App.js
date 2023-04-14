import logo from './logo.svg';
import './App.css';
import SignInButton from './SignInButton';
import Oauthenticate from './Oauthenticate';
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //   <Oauth/>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Oauthenticate/>}/>
        <Route path='/home' element={<SignInButton/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
