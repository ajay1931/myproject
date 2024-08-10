import './App.css';
import Home from './Home';
import Home1 from './HomeOne';
import Parrent from './Parrent';
import UseEffect from './UseEffect';
function App() {
  return (
    <div id='home'>
      <h1 className='heading'>Basics</h1>
      <Home />
      
      <Parrent />
      <h1 className='heading'>useState</h1>
      <Home1 />
      <h1 className='heading'>useEffect</h1>
      <UseEffect />
    </div>


  );
}

export default App;
