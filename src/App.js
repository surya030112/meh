import './App.css';
import Menu from './components/Menu';
import Nav from './components/Nav';
import {Route,Routes} from 'react-router-dom'
import Work from './components/Work';

function App() {
  return (
    <div className="App">
    <Nav/>
    <Routes>
        <Route path='/' element={<Menu/>} />
        <Route path='/works' element={<Work/>}/>
    </Routes>
    </div>
  );
}

export default App;
