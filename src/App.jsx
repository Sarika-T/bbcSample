import logo from './logo.svg';
import './App.css';
import {HashRouter, Routes, Route} from 'react-router-dom';
import Mainpage from './components/Mainpage/Mainpage';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element= {<Mainpage />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
