import React,{useState}from 'react';
import './App.css';
import Atual from './components/atual'
import AnyDate from './components/anyDate'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [flag,setFlag] = useState('1')
  return (
    <div className="App">
      <Button variant="primary" size="lg" onClick={event => setFlag('1')} active>
        Atual
      </Button>
      <Button variant="primary" size="lg" onClick={event => setFlag('2')} active>
        P/data
      </Button>
      {(() => {
        switch (flag) {
          case "1":   return <Atual/>
          case "2": return <AnyDate/>
          default:  return null
        }
      })()}
    </div>
  );
}

export default App;
