import {Routes, Route} from 'react-router-dom'

import './App.css';
import GoogleLogIn from './components/GoogleLogIn';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<GoogleLogIn />}/>
      </Routes>
    </div>
  )
}

export default App;
