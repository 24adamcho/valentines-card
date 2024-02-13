import './App.css';
import {Button} from 'react-bootstrap';
import {useState, useEffect} from 'react';

function App() {
  const [clickIncrement, setClickIncrement] = useState(0);
  const [denyText, setDenyText] = useState('no');
  const [boxSize, setBoxSize] = useState({x:31, y:22, text:1});
  const [acceptBool, setAcceptBool] = useState(false);

  const incrementSize = () => {
    setBoxSize({x: boxSize.x * 1.25, y: boxSize.y * 1.25, text:boxSize.text * 1.25});
    // setBoxSize(boxSize *1.25);
    setClickIncrement(clickIncrement+1);
  }
  const accept = () => {
    setAcceptBool(true);
  }
  useEffect(()=>{
    switch(clickIncrement) {
      case 0:
        setDenyText('no');
        break;
      case 1:
        setDenyText('are you sure?');
        break;
      case 2:
        setDenyText('are you suuuuuuuuure?');
        break;
      case 3:
        setDenyText('are you really sure?');
        break;
      case 4:
        setDenyText('really?');
        break;
      case 5:
        setDenyText("i'll be really sad...");
        break;
      case 6:
        setDenyText('really really sad........');
        break;
      case 7:
        setDenyText('no?');
        setClickIncrement(0);
        break;
      default:
        setDenyText('bet');
    }
  }, [clickIncrement]);

  return (
    <div className="App">
      {acceptBool===false && (
        <header className="main">
          <img className="splash" src="https://media1.tenor.com/m/0r86hBY54UAAAAAC/bear-cola.gif"/> 
          <span>will you be my valentine?</span>
          <div className="buttons">
            <Button variant="primary" 
                    style={{width:boxSize.x, height:boxSize.y}}
                    // style={{transform:`scale(${boxSize}%)`}}
                    onClick={()=>accept()}>
              <span style={{fontSize:`${boxSize.text}em`}}>
                yes
              </span>
            </Button>
            <Button variant="secondary"
                    // style={{width:40, height:40}}
                    onClick={()=>incrementSize()}>{denyText}</Button>
          </div>
        </header>
      )}
      {acceptBool===true && (
      <header className="main accepted">
        <img className="splash splash2" src="https://media1.tenor.com/m/Le-Y5PYJB1QAAAAC/bear.gif"/>
        <span>yaayy!!!!!</span>
      </header>
      )}
    </div>
  );
}

export default App;
