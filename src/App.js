import './App.css';
import Body from './components/body/Body';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className='app-main'>
        <Sidebar />
        <Body />
      </div>
    </div>
  );
}

export default App;
