import './App.css';
import Container from './Container';
import Navbar from './Navbar';
import Tasks from './Tasks';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Container></Container>
      <Tasks></Tasks>
    </div>
  );
}

export default App;
